export default async function ProjectLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ workspaceSlug: string; projectId: string }>;
}) {
    const { workspaceSlug, projectId } = await params;
    return (
        <div className="space-y-6">
            {/* Project navigation tabs */}
            <nav className="flex gap-4 border-b">
                <a href={`/app/${workspaceSlug}/projects/${projectId}`} className="border-b-2 border-transparent px-1 pb-4 text-sm font-medium hover:border-gray-300">
                    Visão Geral
                </a>
                <a href={`/app/${workspaceSlug}/projects/${projectId}/board`} className="border-b-2 border-transparent px-1 pb-4 text-sm font-medium hover:border-gray-300">
                    Quadro
                </a>
            </nav>

            {children}
        </div>
    );
}
