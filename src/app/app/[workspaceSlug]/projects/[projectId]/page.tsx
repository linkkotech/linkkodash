export default function ProjectDetailPage({
    params,
}: {
    params: { workspaceSlug: string; projectId: string };
}) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Projeto #{params.projectId}</h1>
                <p className="text-muted-foreground">
                    Visão geral do projeto
                </p>
            </div>

            {/* Project details will be implemented here */}
        </div>
    );
}
