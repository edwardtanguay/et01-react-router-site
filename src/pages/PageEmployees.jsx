import { Employee } from '../components/Employee';

export const PageEmployees = ({ employees }) => {
	return (
		<>
			<p>There are the {employees.length} employees:</p>

			<div className="employees">
				{employees.map((emp, i) => {
					return (
						<Employee key={i} emp={emp} />
					);
				})}
			</div>
		</>
	);
};
