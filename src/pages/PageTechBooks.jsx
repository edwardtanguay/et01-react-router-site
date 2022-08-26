import { Outlet } from 'react-router-dom';

export const PageTechBooks = ({techBooks}) => {
	return (
		<>
			<p>There are {techBooks.length} tech books:</p>
			<hr />
			<Outlet />
			<hr />
		</>
	);
};