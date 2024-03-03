import { AxiosResponse } from 'axios';
import { CustomSchema, parseThroughSchema } from '@/config/schemas';

// Define a function to process the response body using the provided schema & Return the processed data
export function processResponse<T>(
	response: AxiosResponse<any>,
	schema: CustomSchema<T>
): T {
	const processedData = parseThroughSchema(response, schema);
	return processedData as any;
}
