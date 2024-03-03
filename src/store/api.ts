import { api } from '@/config/axios/interceptor';
import { get } from '@/config/axios/requestFunctions';
import {
	EntryArraySchema,
	EntryArrayType,
	parseThroughSchema,
} from '@/config/schemas';

export const getData = async () => {
	const response = await get('', api);
	const parsedData = parseThroughSchema(
		JSON.parse(response.data),
		EntryArraySchema
	);
	return parsedData as EntryArrayType;
};
