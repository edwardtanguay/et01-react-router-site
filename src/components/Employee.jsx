import { NavLink, Outlet } from 'react-router-dom';

export const Employee = ({ emp, fullInfo }) => {
	return (
		<div className="employee">
			{fullInfo && (
				<div>
					<img
						src={`/images/employees/employee_${emp.employeeID}.jpg`}
						alt=""
					/>
				</div>
			)}
			<div className="details">
				<div className="fullName">
					<NavLink to={`/employees/${emp.employeeID}`}>
						{emp.firstName} {emp.lastName}
					</NavLink>
				</div>
				<div className="title">{emp.title}</div>
				{fullInfo && <div className="notes">{emp.notes}</div>}
			</div>
		</div>
	);
};
