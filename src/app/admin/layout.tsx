export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            {/* Admin Sidebar */}
            <aside className="w-64 border-r bg-slate-900 text-white">
                <div className="p-4">
                    <h2 className="text-lg font-bold">Painel Admin</h2>
                </div>

                <nav className="space-y-1 px-2">
                    <a href="/admin/dashboard" className="block rounded-md px-3 py-2 text-sm hover:bg-slate-800">
                        Dashboard
                    </a>
                    <a href="/admin/workspaces" className="block rounded-md px-3 py-2 text-sm hover:bg-slate-800">
                        Workspaces
                    </a>
                    <a href="/admin/users" className="block rounded-md px-3 py-2 text-sm hover:bg-slate-800">
                        Usuários
                    </a>
                </nav>
            </aside>

            {/* Admin Main Content */}
            <main className="flex-1">
                <header className="border-b bg-background">
                    <div className="flex h-16 items-center px-6">
                        <h1 className="text-lg font-semibold">Administração da Plataforma</h1>
                    </div>
                </header>

                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
