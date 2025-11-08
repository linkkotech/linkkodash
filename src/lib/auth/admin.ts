import { createClient } from "@/lib/supabase/server";

// Roles que têm acesso à área administrativa
const ADMIN_ROLES = ['super_admin', 'admin', 'manager'] as const;

/**
 * Verifica se o usuário atual é um administrador
 * Uso: Server Components e Server Actions
 */
export async function isUserAdmin(): Promise<boolean> {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) return false;

    // Verifica em user_metadata ou app_metadata
    const userRole = user.user_metadata?.role || user.app_metadata?.role;
    const isAdmin = ADMIN_ROLES.includes(userRole);

    return isAdmin;
}

/**
 * Obtém informações do usuário admin
 * Retorna null se não for admin
 */
export async function getAdminUser() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    const userRole = user.user_metadata?.role || user.app_metadata?.role;
    const isAdmin = ADMIN_ROLES.includes(userRole);

    if (!isAdmin) return null;

    return {
        id: user.id,
        email: user.email || "",
        full_name: user.user_metadata?.full_name,
        avatar_url: user.user_metadata?.avatar_url,
        role: userRole as typeof ADMIN_ROLES[number],
    };
}

/**
 * Verifica se o usuário tem permissão de admin
 * Lança erro se não for admin
 */
export async function requireAdmin() {
    const isAdmin = await isUserAdmin();

    if (!isAdmin) {
        throw new Error("Unauthorized: Admin access required");
    }
}
