import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { BackToTop } from './components';

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<BackToTop />
		</>
	);
}

export default App;
