import { Loading } from '@/components';
import { useNavigation } from 'react-router-dom';

const Dashboard = () => {
	const navigation = useNavigation();
	console.log(navigation);

	return (
		<>{navigation.state == 'loading' ? <Loading /> : <h1>Dashboard</h1>}</>
	);
};

export default Dashboard;
