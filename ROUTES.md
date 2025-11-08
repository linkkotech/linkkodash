# 📍 Mapa de Rotas - LinkKoDash

## 🔓 Rotas Públicas (Não autenticadas)

- `/` - Página inicial (redireciona para `/app` se autenticado)
- `/login` - Página de login
- `/signup` - Página de cadastro

## 🔐 Rotas Protegidas - Área do Workspace

**Base:** `/app/[workspaceSlug]/*`

### Exemplo de acesso:
```
/app/meu-workspace/dashboard
/app/empresa-xyz/crm/contacts
```

### Rotas disponíveis:
- `/app` - Seletor de workspace / Primeira workspace
- `/app/[workspaceSlug]/dashboard` - Dashboard do workspace
- `/app/[workspaceSlug]/calendar` - Calendário
- `/app/[workspaceSlug]/chat/[conversationId]` - Chat
- `/app/[workspaceSlug]/crm/contacts` - CRM - Contatos
- `/app/[workspaceSlug]/crm/leads` - CRM - Leads
- `/app/[workspaceSlug]/crm/opportunities` - CRM - Oportunidades
- `/app/[workspaceSlug]/projects` - Projetos
- `/app/[workspaceSlug]/projects/[projectId]` - Detalhes do projeto
- `/app/[workspaceSlug]/projects/[projectId]/board` - Kanban board
- `/app/[workspaceSlug]/settings` - Configurações

## 👑 Rotas Administrativas

**Base:** `/admin/*`

- `/admin` - Dashboard administrativo
- `/admin/dashboard` - Dashboard administrativo (igual a /admin)
- `/admin/workspaces` - Gerenciar workspaces
- `/admin/workspaces/[workspaceId]` - Detalhes do workspace
- `/admin/users` - Gerenciar usuários

## 🔧 API Routes

- `/api/auth/callback` - Callback de autenticação do Supabase

## ⚙️ Middleware

O middleware protege automaticamente:
- Rotas `/app/*` - Requer autenticação
- Rotas `/admin/*` - Requer autenticação (+ pode adicionar verificação de role)
- Redireciona usuários autenticados de `/login` e `/signup` para `/app`

## 📝 Notas

1. **[workspaceSlug]** é o `subdomain` do workspace (slug único)
2. **[workspaceId]** é o UUID do workspace
3. **[projectId]** é o UUID do projeto
4. **[conversationId]** é o UUID da conversa

## 🚀 Próximas rotas a implementar

- `/app/[workspaceSlug]/team` - Gerenciar equipe
- `/app/[workspaceSlug]/reports` - Relatórios
- `/app/[workspaceSlug]/integrations` - Integrações
- `/admin/settings` - Configurações globais
- `/admin/billing` - Faturamento
