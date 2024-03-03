import { Auth } from '@/components';
import { useEffect, useState } from 'react';
import authActions from './authActions';
import { EntryArrayType } from '@/config/schemas';

const Landing = () => {
	const [data, setData] = useState<EntryArrayType>();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setData(await authActions());
	};

	console.log(data);

	return (
		<div>
			<Auth />
		</div>
	);
};

export default Landing;
