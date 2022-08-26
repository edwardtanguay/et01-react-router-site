import { Outlet, useParams, NavLink } from 'react-router-dom';

export const PageTechBooks = ({ techBooks }) => {
	const { id } = useParams();
	const techBook = techBooks.find((m) => String(m.id) === String(id));
	return (
		<>
			<p>
				There are {techBooks.length} tech books:&nbsp;
				<span className="techBookNav">
					{techBooks.map((book, i) => {
						return (
							<span key={i}>
								<span className="title">
									<NavLink to={`/techBooks/${book.id}`}>
										{book.title}
									</NavLink>
								</span>
								{i < techBooks.length - 1 && (
									<span>,&nbsp;</span>
								)}
							</span>
						);
					})}
				</span>
			</p>
			<Outlet context={techBook} />
		</>
	);
};
