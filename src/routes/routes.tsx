// router-imports
import { RouteObject, createBrowserRouter, redirect } from 'react-router-dom';

// local-imports
import { protectedRouteElements, publicRouteElements } from './routeElements';

// element imports
import ErrorPage from '@/error-page';
import Protected from './Protected';
import Public from './Public';

// make a default object for routes - element = <Home />, errorElement = <ErrorPage />
const routes: RouteObject[] = [
	{
		path: '/',
		element: <Public />,
		errorElement: <ErrorPage />,
		children: [...publicRouteElements],
	},
	{
		path: '/',
		element: <Protected />,
		errorElement: <ErrorPage />,
		children: [...protectedRouteElements],
	},
	{
		path: '/logout',
		async loader() {
			// We signout in a "resource route" that we can hit from here
			console.log('Logout Function');
			return redirect('/auth');
		},
	},
];

export const router = createBrowserRouter(routes);
