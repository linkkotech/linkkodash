export default function SettingsPage({
    params,
}: {
    params: { workspaceSlug: string };
}) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
                <p className="text-muted-foreground">
                    Gerencie as configurações do workspace
                </p>
            </div>

            {/* Settings tabs and forms will be implemented here */}
            <div className="grid gap-6">
                <div className="rounded-lg border p-6">
                    <h3 className="font-semibold">Informações do Workspace</h3>
                    <p className="text-sm text-muted-foreground">
                        Workspace atual: {params.workspaceSlug}
                    </p>
                </div>
            </div>
        </div>
    );
}
