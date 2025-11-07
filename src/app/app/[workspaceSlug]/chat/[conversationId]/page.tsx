export default function ChatPage({
    params,
}: {
    params: { workspaceSlug: string; conversationId: string };
}) {
    return (
        <div className="flex h-[calc(100vh-8rem)]">
            {/* Conversations sidebar */}
            <aside className="w-80 border-r">
                <div className="p-4">
                    <h2 className="font-semibold">Conversas</h2>
                </div>
            </aside>

            {/* Chat area */}
            <div className="flex flex-1 flex-col">
                <div className="border-b p-4">
                    <h2 className="font-semibold">Conversa #{params.conversationId}</h2>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    {/* Messages will be implemented here */}
                </div>

                <div className="border-t p-4">
                    {/* Message input will be implemented here */}
                </div>
            </div>
        </div>
    );
}
