export default function DashboardPage({
    params,
}: {
    params: { workspaceSlug: string };
}) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Bem-vindo ao workspace: {params.workspaceSlug}
                </p>
            </div>

            {/* Dashboard metrics and content will be implemented here */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Placeholder cards */}
            </div>
        </div>
    );
}
