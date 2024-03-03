import { ZodError, ZodSchema } from 'zod';

export * from './userSchema';
export * from './axiosSchema';
export * from './dummySchema';

// Define a custom schema type using zod
export type CustomSchema<T> = ZodSchema<T>;

export const parseThroughSchema = <T>(data: unknown, schema: ZodSchema<T>) => {
	try {
		return schema.parse(JSON.parse(JSON.stringify(data)));
	} catch (error) {
		if (error instanceof ZodError) {
			console.log('Zod Error: ', error.errors);
		} else {
			console.log('Unknown Error:', error);
		}
	}
};
