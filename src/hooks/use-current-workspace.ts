import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useWorkspaceStore } from '@/store/use-workspace-store';

export function useCurrentWorkspace() {
    const params = useParams();
    const { currentWorkspaceSlug, setCurrentWorkspace } = useWorkspaceStore();

    const workspaceSlug = params?.workspaceSlug as string | undefined;

    useEffect(() => {
        if (workspaceSlug && workspaceSlug !== currentWorkspaceSlug) {
            // In a real app, you would fetch the workspace ID from the slug
            // For now, we'll just set the slug
            setCurrentWorkspace('temp-id', workspaceSlug);
        }
    }, [workspaceSlug, currentWorkspaceSlug, setCurrentWorkspace]);

    return {
        workspaceSlug: currentWorkspaceSlug,
        workspaceId: useWorkspaceStore((state) => state.currentWorkspaceId),
    };
}
