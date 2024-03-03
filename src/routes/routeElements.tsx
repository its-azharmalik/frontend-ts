import { LANDING, DASHBOARD, USERINFO } from './routeConstants';
import { Landing, Dashboard, UserInfo } from '@/screens';

export const publicRouteElements = [
	{
		path: LANDING,
		element: <Landing />,
	},
];

export const protectedRouteElements = [
	{
		path: DASHBOARD,
		element: <Dashboard />,
	},
	{
		path: USERINFO,
		element: <UserInfo />,
	},
];
