import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function DebugPage() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const userRole = user?.user_metadata?.role || user?.app_metadata?.role || "none";
    const isAdmin = ['super_admin', 'admin', 'manager'].includes(userRole);

    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Debug - Informações do Usuário</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <p className="text-sm font-medium">Email:</p>
                        <p className="text-lg">{user?.email || "Não autenticado"}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium">User ID:</p>
                        <p className="text-lg font-mono text-xs">{user?.id || "N/A"}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium">Role Atual:</p>
                        <Badge variant={isAdmin ? "default" : "secondary"}>
                            {userRole}
                        </Badge>
                    </div>

                    <div>
                        <p className="text-sm font-medium">É Admin?</p>
                        <Badge variant={isAdmin ? "default" : "destructive"}>
                            {isAdmin ? "SIM" : "NÃO"}
                        </Badge>
                    </div>

                    <div className="pt-4 border-t">
                        <p className="text-sm font-medium mb-2">User Metadata (completo):</p>
                        <pre className="bg-muted p-4 rounded-md overflow-auto text-xs">
                            {JSON.stringify(user?.user_metadata, null, 2)}
                        </pre>
                    </div>

                    <div className="pt-4 border-t">
                        <p className="text-sm font-medium mb-2">App Metadata (completo):</p>
                        <pre className="bg-muted p-4 rounded-md overflow-auto text-xs">
                            {JSON.stringify(user?.app_metadata, null, 2)}
                        </pre>
                    </div>

                    <div className="pt-4 border-t bg-yellow-50 dark:bg-yellow-950 p-4 rounded-md">
                        <p className="text-sm font-bold mb-2">📋 Como corrigir:</p>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                            <li>Vá ao Supabase Dashboard → Authentication → Users</li>
                            <li>Clique no seu usuário ({user?.email})</li>
                            <li>Em "Raw User Meta Data", adicione:
                                <pre className="bg-white dark:bg-gray-800 p-2 rounded mt-1 text-xs">
                                    {`{
  "role": "admin"
}`}
                                </pre>
                            </li>
                            <li>Salve e faça logout/login novamente</li>
                        </ol>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
