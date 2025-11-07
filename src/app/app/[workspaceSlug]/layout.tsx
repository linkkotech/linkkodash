export default async function TenantAppLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ workspaceSlug: string }>;
}) {
    const { workspaceSlug } = await params;

    return (
        <div className="flex min-h-screen">
            {/* Sidebar will be implemented here */}
            <aside className="w-64 border-r bg-muted/10">
                <div className="p-4">
                    <h2 className="font-semibold">Workspace: {workspaceSlug}</h2>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1">
                {/* Header will be implemented here */}
                <header className="border-b bg-background">
                    <div className="flex h-16 items-center px-6">
                        <h1 className="text-lg font-semibold">Dashboard</h1>
                    </div>
                </header>

                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
