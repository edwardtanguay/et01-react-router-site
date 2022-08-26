import { useParams, Outlet, NavLink } from 'react-router-dom';
import { Employee } from '../components/Employee';

export const PageEmployees = ({ employees }) => {
	const { id } = useParams();
	const emp = employees.find((m) => String(m.employeeID) === String(id));

	return (
		<>
			<p>
				You can get <NavLink to="/employees/info">info</NavLink> or an{' '}
				<NavLink to="/employees/intro">introduction</NavLink> about the
				employees.
			</p>
			<p>There are the {employees.length} employees:</p>
			{id ? (
				<Employee emp={emp} />
			) : (
				<div>
					<Outlet />
					<div className="employees">
						{employees.map((emp, i) => {
							return <Employee key={i} emp={emp} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};
