export default function ContactsPage({
    params,
}: {
    params: { workspaceSlug: string };
}) {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Contatos</h1>
                    <p className="text-muted-foreground">
                        Gerencie seus contatos
                    </p>
                </div>
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                    Novo Contato
                </button>
            </div>

            {/* Contacts list will be implemented here */}
        </div>
    );
}
