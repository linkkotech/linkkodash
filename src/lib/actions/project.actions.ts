'use server';

import { createClient } from '@/lib/supabase/server';

export async function getProjects(workspaceId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('workspace_id', workspaceId);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function getProject(projectId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', projectId)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function createProject(workspaceId: string, name: string, description?: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('projects')
        .insert({
            workspace_id: workspaceId,
            name,
            description,
        })
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
