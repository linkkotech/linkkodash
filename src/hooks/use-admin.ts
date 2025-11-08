'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

// Roles que têm acesso à área administrativa
const ADMIN_ROLES = ['super_admin', 'admin', 'manager'] as const;
type AdminRole = typeof ADMIN_ROLES[number];

/**
 * Hook para verificar se o usuário atual é admin
 * Uso: Client Components
 */
export function useIsAdmin() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAdmin = async () => {
            const supabase = createClient();
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                const userRole = user.user_metadata?.role || user.app_metadata?.role;
                const adminStatus = ADMIN_ROLES.includes(userRole);
                setIsAdmin(adminStatus);
            }

            setLoading(false);
        };

        checkAdmin();
    }, []);

    return { isAdmin, loading };
}

/**
 * Hook para obter dados do usuário admin
 * Retorna null se não for admin
 */
export function useAdminUser() {
    const [adminUser, setAdminUser] = useState<{
        id: string;
        email: string;
        full_name?: string;
        avatar_url?: string;
        role: AdminRole;
    } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAdmin = async () => {
            const supabase = createClient();
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                const userRole = user.user_metadata?.role || user.app_metadata?.role;
                const isAdmin = ADMIN_ROLES.includes(userRole);

                if (isAdmin) {
                    setAdminUser({
                        id: user.id,
                        email: user.email || '',
                        full_name: user.user_metadata?.full_name,
                        avatar_url: user.user_metadata?.avatar_url,
                        role: userRole as AdminRole,
                    });
                }
            }

            setLoading(false);
        };

        getAdmin();
    }, []);

    return { adminUser, loading };
}
