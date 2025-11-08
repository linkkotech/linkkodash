"use client"

import * as React from "react"
import {
    LayoutDashboard,
    Building2,
    Users,
    LogOut,
    ChevronsUpDown,
} from "lucide-react"
import Link from "next/link"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"

// Navigation items for admin panel
const navItems = [
    {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboard,
        isActive: true,
    },
    {
        title: "Workspaces",
        url: "/admin/workspaces",
        icon: Building2,
    },
    {
        title: "Usuários",
        url: "/admin/users",
        icon: Users,
    },
]

interface AdminSidebarProps {
    user?: {
        name: string
        email: string
        avatar: string
    }
}

export function AdminSidebar({ user }: AdminSidebarProps) {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/admin/dashboard">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <span className="font-bold">L</span>
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold">LinkKoDash</span>
                                    <span className="text-xs text-muted-foreground">Admin</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarMenu>
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.url}>
                            <SidebarMenuButton asChild isActive={item.isActive}>
                                <Link href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter>
                {user && (
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <NavUser user={user} />
                        </SidebarMenuItem>
                    </SidebarMenu>
                )}
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
