import { useParams, Outlet } from 'react-router-dom';
import { Employee } from '../components/Employee';

export const PageEmployees = ({ employees }) => {
	const { id } = useParams();
	const emp = employees.find((m) => String(m.employeeID) === String(id));

	return (
		<>
			{id ? (
				<Employee emp={emp} />
			) : (
				<div>
					<p>There are the {employees.length} employees:</p>
					<div className="employees">
						{employees.map((emp, i) => {
							return <Employee key={i} emp={emp} />;
						})}
					</div>
					<hr/>
					<Outlet />
					<hr/>
				</div>
			)}
		</>
	);
};
