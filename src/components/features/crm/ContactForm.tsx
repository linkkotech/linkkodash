'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().email('Email inválido'),
    phone: z.string().optional(),
    company: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        console.log(data);
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome *
                </label>
                <input
                    {...register('name')}
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                </label>
                <input
                    {...register('email')}
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                </label>
                <input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Empresa
                </label>
                <input
                    {...register('company')}
                    id="company"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
                Salvar Contato
            </button>
        </form>
    );
}
