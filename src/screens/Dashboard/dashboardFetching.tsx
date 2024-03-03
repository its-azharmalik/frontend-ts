import { userSchema } from '@/config/schemas';

const dashboardFetching = async () => {
	console.log('dashboard Data Fetching...');
	// check for if data exists or not if not then call for the api and then return the data
	await new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});

	const data = {
		id: '1',
		name: 'Azhar',
		email: 'azhar@gmail.com',
		password: '******',
		createdAt: '',
		updatedAt: '',
	};
	const user = userSchema.parse(data);
	return {
		user,
	};
};

export default dashboardFetching;
