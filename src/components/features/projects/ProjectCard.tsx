import Link from 'next/link';

interface ProjectCardProps {
    id: string;
    name: string;
    description?: string;
    workspaceSlug: string;
}

export function ProjectCard({ id, name, description, workspaceSlug }: ProjectCardProps) {
    return (
        <Link
            href={`/app/${workspaceSlug}/projects/${id}`}
            className="block rounded-lg border bg-card p-6 text-card-foreground transition-colors hover:bg-accent"
        >
            <h3 className="text-lg font-semibold">{name}</h3>
            {description && (
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            )}
            <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Ativo
                </span>
            </div>
        </Link>
    );
}
