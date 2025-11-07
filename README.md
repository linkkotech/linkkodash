# LinkkoDash - Plataforma SaaS Multi-TenantThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



Plataforma SaaS completa para gerenciamento de projetos, CRM e colaboração com arquitetura multi-tenant.## Getting Started



## 🏗️ Arquitetura do ProjetoFirst, run the development server:



Este projeto foi estruturado com **três contextos de roteamento distintos**:```bash

npm run dev

### 1. **Rotas Públicas/Autenticação** (`/login`, `/signup`)# or

- Páginas públicas de login e cadastroyarn dev

- Agrupadas em `(auth)` para compartilhar layout simples# or

pnpm dev

### 2. **Aplicação Tenant** (`/app/[workspaceSlug]/...`)# or

- Aplicação principal para clientes autenticadosbun dev

- **Multi-tenant**: URL segmentada por `workspaceSlug` dinâmico```

- Módulos: Dashboard, Projetos, CRM, Chat, Calendário, Configurações

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. **Painel Admin da Plataforma** (`/admin/...`)

- Área protegida para super administradoresYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- Gerenciamento de workspaces e usuários da plataforma

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🛠️ Stack Tecnológica

## Learn More

- **Framework**: Next.js 15 (App Router) + React 19

- **Linguagem**: TypeScriptTo learn more about Next.js, take a look at the following resources:

- **Backend & Auth**: Supabase (PostgreSQL + RLS)

- **UI**: Tailwind CSS + Shadcn/UI- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- **Bibliotecas Core**:- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  - TanStack Query (data fetching)

  - Zustand (state management)You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

  - React Hook Form (formulários)

  - Zod (validação de schemas)## Deploy on Vercel



## 📁 Estrutura de PastasThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.



```Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

linkkodash/
├── .vscode/
│   └── settings.json              # Configurações do VS Code
├── public/                        # Arquivos estáticos
├── src/
│   ├── app/                       # App Router do Next.js
│   │   ├── (auth)/               # Rotas públicas de autenticação
│   │   │   ├── login/page.tsx
│   │   │   ├── signup/page.tsx
│   │   │   └── layout.tsx
│   │   ├── app/[workspaceSlug]/  # Aplicação multi-tenant
│   │   │   ├── layout.tsx        # Shell com sidebar e header
│   │   │   ├── dashboard/
│   │   │   ├── projects/
│   │   │   │   └── [projectId]/
│   │   │   │       ├── board/    # Quadro Kanban
│   │   │   │       └── layout.tsx
│   │   │   ├── crm/
│   │   │   │   ├── contacts/
│   │   │   │   ├── leads/
│   │   │   │   └── opportunities/
│   │   │   ├── chat/[conversationId]/
│   │   │   ├── calendar/
│   │   │   └── settings/
│   │   ├── admin/                # Painel admin da plataforma
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   ├── workspaces/
│   │   │   └── users/
│   │   ├── api/auth/callback/    # Callback do Supabase
│   │   ├── layout.tsx            # Layout raiz
│   │   └── page.tsx              # Landing page
│   ├── components/
│   │   ├── ui/                   # Componentes Shadcn/UI
│   │   ├── shared/               # Componentes globais
│   │   └── features/             # Componentes por módulo
│   │       ├── projects/
│   │       │   ├── ProjectCard.tsx
│   │       │   └── TaskBoard.tsx
│   │       └── crm/
│   │           └── ContactForm.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts         # Cliente browser
│   │   │   └── server.ts         # Cliente server-side
│   │   ├── tanstack-query/
│   │   │   └── QueryProvider.tsx
│   │   ├── actions/              # Server Actions
│   │   │   ├── auth.actions.ts
│   │   │   └── project.actions.ts
│   │   └── utils.ts
│   ├── hooks/
│   │   └── use-current-workspace.ts
│   ├── store/
│   │   └── use-workspace-store.ts # Zustand store
│   ├── schemas/
│   │   └── project.schemas.ts    # Schemas Zod
│   ├── types/
│   │   └── database.types.ts     # Types do Supabase
│   └── middleware.ts             # Proteção de rotas
├── .env.local                    # Variáveis de ambiente
├── .env.example                  # Template de variáveis
└── package.json
```

## 🚀 Como Começar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha com suas credenciais do Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=sua-url-do-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Executar o Projeto

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 📋 Módulos da Aplicação

### Dashboard
- Visão geral do workspace
- Métricas e estatísticas

### Projetos
- Listagem de projetos
- Visualização detalhada
- Quadro Kanban para tarefas
- Gerenciamento de tasks

### CRM
- **Contatos**: Gerenciamento de contatos
- **Leads**: Pipeline de leads
- **Oportunidades**: Acompanhamento de vendas

### Chat
- Conversas em tempo real
- Múltiplos canais (inboxes)

### Calendário
- Eventos e compromissos
- Integração com tarefas

### Configurações
- Configurações do workspace
- Preferências de usuário

## 🔐 Autenticação e Proteção de Rotas

O middleware (`src/middleware.ts`) protege automaticamente:

- Rotas `/app/*` → Requer autenticação
- Rotas `/admin/*` → Requer autenticação + role de admin
- Redirecionamento de usuários autenticados das páginas de login

## 📦 Componentes Shadcn/UI

Para adicionar novos componentes:

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
# ... etc
```

## 🗄️ Supabase - Próximos Passos

1. Criar projeto no [Supabase](https://supabase.com)
2. Executar migrations do banco de dados
3. Configurar Row Level Security (RLS)
4. Gerar tipos TypeScript:

```bash
npx supabase gen types typescript --project-id <project-id> --schema public > src/types/database.types.ts
```

## 🎨 Personalização

### Temas
Configurações de tema em `src/app/globals.css`

### Componentes UI
Componentes Shadcn personalizáveis em `src/components/ui/`

## 📄 Licença

MIT

## 👥 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou pull request.

---

**Desenvolvido com ❤️ usando Next.js 15 e Supabase**
