import { z } from 'zod';

//schemas
export const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string(),
	password: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
});
export const userArraySchema = z.array(userSchema);

//types
export type User = z.infer<typeof userSchema>;
export type UserArray = z.infer<typeof userArraySchema>;
