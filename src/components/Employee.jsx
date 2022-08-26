import { NavLink, Outlet } from 'react-router-dom';

export const Employee = ({ emp }) => {
	return (
		<div className="employee">
			<div className="fullName">
				<NavLink to={`/employees/${emp.employeeID}`}>
					{emp.firstName} {emp.lastName}
				</NavLink>
			</div>
			<div className="title">{emp.title}</div>
		</div>
	);
};
