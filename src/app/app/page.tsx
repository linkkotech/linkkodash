import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AppPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    // Buscar primeiro workspace do usuário
    const { data: workspaces } = await supabase
        .from("workspaces")
        .select("subdomain")
        .limit(1)
        .single();

    // Se tiver workspace, redirecionar para ele
    if (workspaces?.subdomain) {
        return redirect(`/app/${workspaces.subdomain}/dashboard`);
    }

    // Se não tiver workspace, mostrar página de boas-vindas
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="mx-auto max-w-md space-y-6 text-center">
                <h1 className="text-3xl font-bold">Bem-vindo!</h1>
                <p className="text-muted-foreground">
                    Você ainda não possui um workspace. Entre em contato com o
                    administrador para obter acesso.
                </p>
                <div className="pt-4">
                    <a
                        href="/login"
                        className="text-sm text-primary hover:underline"
                    >
                        Voltar para o login
                    </a>
                </div>
            </div>
        </div>
    );
}
