import { api } from '@/config/axios/interceptor';
import { get } from '@/config/axios/requestFunctions';
import {
	EntryArraySchema,
	EntryArrayType,
	parseThroughSchema,
} from '@/config/schemas';
import { createAsyncThunk } from '@reduxjs/toolkit';


// all the data fetching fucntions go here
const getData = async () => {
	const response = await get('', api);
	const parsedData = parseThroughSchema(
		JSON.parse(response.data),
		EntryArraySchema
	);
	return parsedData as EntryArrayType;
};

// all the thunk functions go here
export const getDataThunk = createAsyncThunk('data/getData', getData);
