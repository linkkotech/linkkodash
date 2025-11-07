import { create } from 'zustand';

interface WorkspaceState {
    currentWorkspaceId: string | null;
    currentWorkspaceSlug: string | null;
    setCurrentWorkspace: (id: string, slug: string) => void;
    clearCurrentWorkspace: () => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
    currentWorkspaceId: null,
    currentWorkspaceSlug: null,
    setCurrentWorkspace: (id, slug) =>
        set({ currentWorkspaceId: id, currentWorkspaceSlug: slug }),
    clearCurrentWorkspace: () =>
        set({ currentWorkspaceId: null, currentWorkspaceSlug: null }),
}));
