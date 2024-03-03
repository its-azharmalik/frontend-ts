// locastorage getter and setter functions
export function getLocalStorage(key: string): string | null {
	return localStorage.getItem(key);
}
export function setLocalStorage(key: string, value: string): void {
	localStorage.setItem(key, value);
}

// Define functions to get & set the token from local storage
export function getToken(): string | null {
	return getLocalStorage('token');
}
export function setToken(token: string): void {
	setLocalStorage('token', token);
}
