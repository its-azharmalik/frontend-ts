import { getData } from '@/store/api';

const authActions = async () => {
	const data = await getData();
	return data;
};

export default authActions;
