'use client';

export function TaskBoard() {
    const columns = [
        { id: 'todo', title: 'A Fazer', tasks: [] },
        { id: 'in-progress', title: 'Em Progresso', tasks: [] },
        { id: 'done', title: 'Concluído', tasks: [] },
    ];

    return (
        <div className="flex gap-4 overflow-x-auto pb-4">
            {columns.map((column) => (
                <div key={column.id} className="flex-shrink-0 w-80">
                    <div className="rounded-lg border bg-muted/50 p-4">
                        <h3 className="font-semibold mb-4">{column.title}</h3>
                        <div className="space-y-2">
                            {column.tasks.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center py-8">
                                    Nenhuma tarefa
                                </p>
                            ) : (
                                column.tasks.map((task: any) => (
                                    <div
                                        key={task.id}
                                        className="rounded-lg border bg-card p-3 text-card-foreground"
                                    >
                                        <p className="font-medium">{task.title}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
