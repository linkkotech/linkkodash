export default function OpportunitiesPage({
    params,
}: {
    params: { workspaceSlug: string };
}) {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Oportunidades</h1>
                    <p className="text-muted-foreground">
                        Gerencie suas oportunidades de vendas
                    </p>
                </div>
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                    Nova Oportunidade
                </button>
            </div>

            {/* Opportunities pipeline will be implemented here */}
        </div>
    );
}
