import { z } from 'zod';

// Schemas
/*
    'data' is any value that represents the data returned by the axios request
    'status' is a number that represents the HTTP status code of the response
    'statusText' is a string that represents the HTTP status text of the response
    'headers' is any value that represents the headers returned by the axios request
    'config' is any value that represents the configuration used for the axios request
    'request' is any value that represents the request that was made
*/
export const AxiosResponseSchema = z.object({
	data: z.any(),
	status: z.number(),
	statusText: z.string(),
	headers: z.any(),
	config: z.any(),
	request: z.any(),
});

/*
    'message' is a string that describes the error
    'name' is a string that represents the name of the error
    'stack' is a string that represents the stack trace of the error
    'config' is any value that represents the configuration used for the axios request
    'code' is a string that represents the error status code
    'request' is any value that represents the request that was made
    'response' is an object that matches the AxiosResponseSchema
*/
export const AxiosErrorSchema = z.object({
	message: z.string(),
	name: z.string(),
	stack: z.string(),
	config: z.any(),
	code: z.string(),
	request: z.any(),
	response: AxiosResponseSchema,
});

/*
    'params' is a record (object) where the keys are strings and the values are either strings or numbers. This represents the URL parameters that are to be sent with the request. It's optional because not all requests need URL parameters.
    'data' is any value that represents the data to be sent as the request body. It's optional because not all requests need a body (like GET requests).
    'timeout' is a number that represents the number of milliseconds before the request times out. It's optional because not all requests may want to specify a timeout.
    'withCredentials' is a boolean that indicates whether or not cross-site Access-Control requests should be made using credentials like cookies or authorization headers. It's optional because not all requests need to send credentials.
*/
export const AxiosRequestConfigSchema = z.object({
	params: z.record(z.union([z.string(), z.number()])).optional(),
	data: z.any().optional(),
	timeout: z.number().optional(),
	withCredentials: z.boolean().optional(),
	headers: z.record(z.string()),
	baseURL: z.string().optional(),
	method: z.string().optional(),
	url: z.string().optional(),
});

// types
export type AxiosResponseData = z.infer<typeof AxiosResponseSchema>;
export type AxiosErrorData = z.infer<typeof AxiosErrorSchema>;
export type AxiosRequestConfigData = z.infer<typeof AxiosRequestConfigSchema>;
