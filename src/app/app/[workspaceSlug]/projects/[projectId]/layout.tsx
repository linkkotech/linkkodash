export default function ProjectLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { workspaceSlug: string; projectId: string };
}) {
    return (
        <div className="space-y-6">
            {/* Project navigation tabs */}
            <nav className="flex gap-4 border-b">
                <a href={`/app/${params.workspaceSlug}/projects/${params.projectId}`} className="border-b-2 border-transparent px-1 pb-4 text-sm font-medium hover:border-gray-300">
                    Visão Geral
                </a>
                <a href={`/app/${params.workspaceSlug}/projects/${params.projectId}/board`} className="border-b-2 border-transparent px-1 pb-4 text-sm font-medium hover:border-gray-300">
                    Quadro
                </a>
            </nav>

            {children}
        </div>
    );
}
