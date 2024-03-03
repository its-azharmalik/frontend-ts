import { z } from 'zod';

export const EntrySchema = z.object({
	API: z.string(),
	Description: z.string(),
	Auth: z.string().optional(),
	HTTPS: z.boolean(),
	Cors: z.string(),
	Link: z.string(),
	Category: z.string(),
});

export const EntryArraySchema = z.object({
	count: z.number(),
	entries: z.array(EntrySchema),
});

export type EntryType = z.infer<typeof EntrySchema>;
export type EntryArrayType = z.infer<typeof EntryArraySchema>;
