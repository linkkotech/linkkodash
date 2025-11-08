"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/shared/AdminSidebar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AdminSidebar
                    user={{
                        name: "Admin User",
                        email: "admin@example.com",
                        avatar: "/avatars/admin.jpg",
                    }}
                />

                {/* Admin Main Content */}
                <main className="flex-1 flex flex-col">
                    <header className="border-b bg-background">
                        <div className="flex h-16 items-center px-6">
                            <h1 className="text-lg font-semibold">Administração da Plataforma</h1>
                        </div>
                    </header>

                    <div className="flex-1 p-6">
                        {children}
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}
