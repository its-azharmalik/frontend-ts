import { getToken, setLocalStorage } from '@/lib/localStorage';
import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
} from 'axios';
import {
	AxiosErrorSchema,
	AxiosRequestConfigSchema,
	AxiosResponseSchema,
	parseThroughSchema,
} from '@/config/schemas';
import { processResponse } from './utils';
import { LOGIN } from './requestConstants';

// Create a function to generate custom Axios instances with request & response interceptors with provided baseURL and headers
export function createAxiosInstance(
	baseURL: string = 'https://api.publicapis.org/entries' as string,
	headers: Record<string, string> = {
		'Content-Type': 'application/json',
	}
): AxiosInstance {
	// provided baseURL and headers
	const instance = axios.create({
		baseURL,
		headers,
	});

	// Add a request interceptor
	instance.interceptors.request.use(
		(config: AxiosRequestConfig) => {
			// use the AxiosRequestConfigSchema to validate the config object and parse it before sending it to the backend
			const parsedConfig = parseThroughSchema(config, AxiosRequestConfigSchema);
			// logic for if it is a protected request then check for the token and add it to the headers
			const token = getToken();
			if (token && parsedConfig) {
				parsedConfig.headers['Authorization'] = `Bearer ${token}`;
				parsedConfig.withCredentials = true;
			}
			// Modify the request config if needed
			return parsedConfig as any;
		},
		(error: AxiosError) => {
			// Handle request and if error parsed properly then toast the error accordingly and manage that in the function of error handling
			const parsedError = processResponse(error as any, AxiosErrorSchema);
			return Promise.reject(parsedError);
		}
	);
	// Add a response interceptor
	instance.interceptors.response.use(
		(response: AxiosResponse<any>) => {
			// Process the response body using the axios response schema
			const processedData = processResponse(response, AxiosResponseSchema);

			// if this was a login request then log in the user;
			if (
				processedData.headers?.requestUrl == `${baseURL}${LOGIN}` &&
				processedData.status == 200 &&
				processedData.data.token &&
				processedData.data.token != ''
			) {
				setLocalStorage('token', processedData.data.token);
			}
			return processedData as any;
		},
		(error: AxiosError) => {
			// Handle response error and if error parsed properly then toast the error accordingly and manage that in the function of error handling
			const parsedError = processResponse(error as any, AxiosErrorSchema);
			return Promise.reject(parsedError);
		}
	);

	return instance;
}

/* Usage example:
	const customInstance = createAxiosInstance('https://api.example.com', {
		'Content-Type': 'application/json',
		Authorization: 'Bearer token',
	});
*/

export const api = createAxiosInstance();
