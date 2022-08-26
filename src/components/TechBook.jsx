import { NavLink, useOutletContext } from 'react-router-dom';

export const TechBook = () => {
	const techBook = useOutletContext();
	return (
		<div className="techBook">
			<img
				src={`/images/techBooks/${techBook.idCode}.jpg`}
				alt=""
			/>
			<div className="details">
				<div className="title">{techBook.title}</div>
				<div className="description">{techBook.description}</div>
			</div>
		</div>
	);
};
