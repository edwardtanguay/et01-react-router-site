import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<ul>
			<li><Link to="/">Welcome</Link></li>
			<li><Link to="/employees">Employees</Link></li>
			<li><Link to="/techbooks">Tech Books</Link></li>
		</ul>
	);
};
export default Nav;