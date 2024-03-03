import { IoIosArrowUp } from 'react-icons/io';

const BackToTop = () => {
	return (
		<button onClick={() => console.log('Scroll Back to Top')}>
			<IoIosArrowUp />
		</button>
	);
};

export default BackToTop;
