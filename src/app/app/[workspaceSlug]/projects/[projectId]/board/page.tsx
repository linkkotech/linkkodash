export default function ProjectBoardPage({
    params,
}: {
    params: { workspaceSlug: string; projectId: string };
}) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Quadro Kanban</h1>
                <p className="text-muted-foreground">
                    Projeto #{params.projectId}
                </p>
            </div>

            {/* Kanban board will be implemented here */}
            <div className="flex gap-4 overflow-x-auto">
                {/* Task columns */}
            </div>
        </div>
    );
}
