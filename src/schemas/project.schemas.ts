import { z } from 'zod';

export const createProjectSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
    description: z.string().max(500, 'Descrição muito longa').optional(),
    workspace_id: z.string().uuid('ID de workspace inválido'),
});

export const updateProjectSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo').optional(),
    description: z.string().max(500, 'Descrição muito longa').optional(),
    status: z.enum(['active', 'archived', 'completed']).optional(),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;
