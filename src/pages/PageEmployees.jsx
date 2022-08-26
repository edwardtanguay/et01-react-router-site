export const PageEmployees = ({ employees }) => {
	return (
		<>
			<p>There are the {employees.length} employees:</p>

			<div className="employees">
				{employees.map((emp, i) => {
					return (
						<div className="employee" key={i}>
							<div className="fullName">{emp.firstName} {emp.lastName}</div>
							<div className="title">{emp.title}</div>
							<div className="notes">{emp.notes}</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
