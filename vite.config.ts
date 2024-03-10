import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@screen': path.resolve(__dirname, './src/screens'),
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
	server: {
		host: true,
		port: 4321,
	},
});
