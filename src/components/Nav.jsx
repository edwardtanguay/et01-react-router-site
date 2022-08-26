import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Welcome</NavLink>
				</li>
				<li>
					<NavLink to="/employees">Employees</NavLink>
				</li>
				<li>
					<NavLink to="/techbooks">Tech Books</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;
