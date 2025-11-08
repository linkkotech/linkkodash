export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Admin</h1>
        <p className="text-muted-foreground">
          Visão geral da plataforma
        </p>
      </div>

      {/* Admin metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Total de Workspaces</h3>
          <p className="text-2xl font-bold">0</p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Total de Usuários</h3>
          <p className="text-2xl font-bold">0</p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Usuários Ativos</h3>
          <p className="text-2xl font-bold">0</p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Projetos Criados</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
