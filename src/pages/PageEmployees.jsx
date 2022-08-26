export const PageEmployees = ({ employees }) => {
	return (
		<>
			<p>There are the {employees.length} employees:</p>

			<div className="employees">
				{employees.map((emp, i) => {
					return (
						<div className="employee" key={i}>
							<div className="fullName">full name</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
