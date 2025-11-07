export default function AdminUsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>
                    <p className="text-muted-foreground">
                        Gerencie todos os usuários da plataforma
                    </p>
                </div>
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                    Convidar Usuário
                </button>
            </div>

            {/* Users table will be implemented here */}
            <div className="rounded-lg border">
                <table className="w-full">
                    <thead className="border-b bg-muted/50">
                        <tr>
                            <th className="p-4 text-left text-sm font-medium">Nome</th>
                            <th className="p-4 text-left text-sm font-medium">Email</th>
                            <th className="p-4 text-left text-sm font-medium">Função</th>
                            <th className="p-4 text-left text-sm font-medium">Workspaces</th>
                            <th className="p-4 text-left text-sm font-medium">Status</th>
                            <th className="p-4 text-left text-sm font-medium">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Users data will be loaded here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
