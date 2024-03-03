import { AxiosInstance } from 'axios';

// Define types for different HTTP methods
type HttpMethod = 'get' | 'post' | 'put' | 'delete';

// Define a function to create a typed request function for a specific HTTP method
function createRequestFunction<T>(
	instance: AxiosInstance,
	method: HttpMethod
): (url: string, data?: any) => Promise<T> {
	return async (url: string, data?: any) => {
		return await instance[method](url, data);
	};
}

// Define typed request functions for different HTTP methods
export const get = <T = any>(url: string, instance: AxiosInstance) =>
	createRequestFunction<T>(instance, 'get')(url);

export const post = <T = any>(
	url: string,
	instance: AxiosInstance,
	data?: any
) => createRequestFunction<T>(instance, 'post')(url, data);

export const put = <T = any>(
	url: string,
	instance: AxiosInstance,
	data?: any
) => createRequestFunction<T>(instance, 'put')(url, data);

export const del = <T = any>(url: string, instance: AxiosInstance) =>
	createRequestFunction<T>(instance, 'delete')(url);

/* Usage in a custom hook for getting data
	export function useGetData<T>(url: string): Promise<T> {
		return get<T>(url, instance);
	}

	Usage example for CRUD operations on /users route
	const usersUrl = '/users';

	export const getUsers = () => get<User[]>(usersUrl, instance);
	export const createUser = (user: User) => post<User>(usersUrl, user);
	export const updateUser = (userId: string, user: User) =>
		put<User>(`${usersUrl}/${userId}`, user);
	export const deleteUser = (userId: string) =>
		del<void>(`${usersUrl}/${userId}`);
*/
