export const Employee = ({emp}) => {
	return (
		<div className="employee">
			<div className="fullName">
				{emp.firstName} {emp.lastName}
			</div>
			<div className="title">{emp.title}</div>
		</div>
	);
};
