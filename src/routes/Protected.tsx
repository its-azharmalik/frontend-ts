import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LANDING } from './routeConstants';

const Protected = () => {
	// Logged In Check Logic
	const [loggedIn] = useState(true);
	// write a hook to check if user is logged in and use it here to redirect to login page if not logged in
	return loggedIn ? <Outlet /> : <Navigate to={LANDING} />;
};

export default Protected;
