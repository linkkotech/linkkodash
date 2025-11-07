import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted">
      <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Linkko<span className="text-primary">Dash</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Plataforma SaaS Multi-Tenant para Gerenciamento de Projetos, CRM e Colaboração
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/login"
            className="flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Fazer Login
          </Link>
          <Link
            href="/signup"
            className="flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Criar Conta
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl w-full mt-8">
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold">Gerenciamento de Projetos</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Quadros Kanban, tarefas e colaboração em tempo real
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold">CRM Completo</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Gerencie contatos, leads e oportunidades de vendas
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold">Multi-Tenant</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Múltiplos workspaces isolados e seguros
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
