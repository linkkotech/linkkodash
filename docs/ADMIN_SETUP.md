# 🔐 Configuração de Administradores

## Roles Administrativos

O sistema suporta três níveis de acesso administrativo:

- **`super_admin`** - Super Administrador (acesso total)
- **`admin`** - Administrador (gerenciamento completo)
- **`manager`** - Gerente (acesso administrativo limitado)

Todos esses roles têm acesso à área `/admin`.

## Como definir um usuário como Admin

### Opção 1: Via Supabase Dashboard (Recomendado)

1. Acesse o **Supabase Dashboard**
2. Vá em **Authentication > Users**
3. Clique no usuário que deseja tornar admin
4. Em **User Metadata**, adicione um dos seguintes:
   ```json
   {
     "role": "super_admin"
   }
   ```
   ou
   ```json
   {
     "role": "admin"
   }
   ```
   ou
   ```json
   {
     "role": "manager"
   }
   ```
5. Salve as alterações

### Opção 2: Via SQL (Supabase SQL Editor)

```sql
-- Super Admin
UPDATE auth.users
SET raw_user_meta_data = raw_user_meta_data || '{"role": "super_admin"}'::jsonb
WHERE email = 'seu-email@exemplo.com';

-- Admin
UPDATE auth.users
SET raw_user_meta_data = raw_user_meta_data || '{"role": "admin"}'::jsonb
WHERE email = 'outro-email@exemplo.com';

-- Manager
UPDATE auth.users
SET raw_user_meta_data = raw_user_meta_data || '{"role": "manager"}'::jsonb
WHERE email = 'manager@exemplo.com';
```

### Opção 3: Via API (programaticamente)

```typescript
// No seu código server-side (usando Service Role Key)
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // Service Role Key, não Anon Key
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// Atualizar usuário
const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
  'user-uuid-here',
  {
    user_metadata: { role: 'admin' }
  }
)
```

## Como funciona o redirecionamento

### Middleware (`src/middleware.ts`)

O middleware verifica o `role` do usuário e redireciona automaticamente:

- **Super Admin/Admin/Manager:** `/` → `/admin`
- **Super Admin/Admin/Manager:** `/login` → `/admin` (após login)
- **User normal:** `/` → `/app`
- **User normal:** `/login` → `/app` (após login)

### Proteção de rotas

- `/admin/*` - **Apenas super_admin, admin ou manager** podem acessar
- `/app/*` - **Todos os usuários autenticados** podem acessar
- Usuários normais tentando acessar `/admin` são redirecionados para `/app`

### Roles suportados

```typescript
const ADMIN_ROLES = ['super_admin', 'admin', 'manager'];
```

## Verificar role no código

```typescript
// Server Component
import { createClient } from "@/lib/supabase/server";

const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();
const userRole = user?.user_metadata?.role || user?.app_metadata?.role;
const isAdmin = ['super_admin', 'admin', 'manager'].includes(userRole);
```

```typescript
// Client Component
'use client';
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();
const { data: { user } } = await supabase.auth.getUser();
const userRole = user?.user_metadata?.role || user?.app_metadata?.role;
const isAdmin = ['super_admin', 'admin', 'manager'].includes(userRole);
```

### Usando helpers

```typescript
// Server-side
import { isUserAdmin, getAdminUser } from "@/lib/auth/admin";

const isAdmin = await isUserAdmin(); // boolean
const adminUser = await getAdminUser(); // { id, email, role, ... } | null
```

```typescript
// Client-side
import { useIsAdmin, useAdminUser } from "@/hooks/use-admin";

const { isAdmin, loading } = useIsAdmin();
const { adminUser, loading } = useAdminUser();
```

## Exemplo de uso condicional

```tsx
export function DashboardHeader() {
  const isAdmin = useIsAdmin(); // custom hook
  
  return (
    <header>
      <h1>Dashboard</h1>
      {isAdmin && (
        <Link href="/admin">Painel Admin</Link>
      )}
    </header>
  );
}
```

## Estrutura recomendada de roles

Sistema de roles hierárquico:

```json
{
  "role": "super_admin",  // Acesso total à plataforma
  "workspace_roles": {
    "workspace-uuid-1": "owner",     // Dono do workspace
    "workspace-uuid-2": "member"     // Membro do workspace
  }
}
```

### Hierarquia de permissões

1. **`super_admin`** 
   - Acesso total à plataforma
   - Gerenciar todos os workspaces
   - Gerenciar todos os usuários
   - Configurações globais

2. **`admin`**
   - Gerenciar workspaces
   - Gerenciar usuários
   - Visualizar métricas globais

3. **`manager`**
   - Visualizar workspaces
   - Acesso limitado a configurações
   - Relatórios e métricas

4. **`user`** (padrão)
   - Acesso apenas aos workspaces atribuídos
   - Sem acesso a `/admin`

## Testando

1. Crie um usuário via signup: `/signup`
2. Defina como admin via Dashboard ou SQL
3. Faça logout e login novamente
4. Você será redirecionado para `/admin` automaticamente
5. Acesse `/` e será redirecionado para `/admin`

## Troubleshooting

### "Ainda sou redirecionado para /app"
- Verifique se o `user_metadata` foi salvo corretamente
- Faça logout e login novamente (para atualizar o token)
- Limpe o cache do navegador

### "Não consigo atualizar user_metadata"
- Certifique-se de usar a **Service Role Key** (não Anon Key)
- Verifique permissões no Supabase
