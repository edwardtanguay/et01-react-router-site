import { useEffect, useState } from 'react';
import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageEmployees } from './pages/PageEmployees';
import { PageTechBooks } from './pages/PageTechBooks';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import axios from 'axios';
import { Employee } from './components/Employee';
import { TechBook } from './components/TechBook';
import { TechBookInfo } from './components/TechBookInfo';
import { EmployeeInfo } from './components/EmployeeInfo';
import { EmployeeIntro } from './components/EmployeeIntro';

const employeesUrl = 'https://edwardtanguay.netlify.app/share/employees.json';
const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

function App() {
	const [employees, setEmployees] = useState([]);
	const [techBooks, setTechBooks] = useState([]);

	useEffect(() => {
		(async () => {
			setEmployees((await axios.get(employeesUrl)).data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setTechBooks((await axios.get(techBooksUrl)).data);
		})();
	}, []);

	return (
		<div className="App">
			<h1>React Router Site</h1>
			<Nav />

			<div className="pageArea">
				<Routes>
					<Route path="/" element={<PageWelcome />} />
					{employees.length > 0 && (
						<Route
							path="/employees"
							element={<PageEmployees employees={employees} />}
						>
							<Route path=":id" element={<Employee />} />
							<Route path="info" element={<EmployeeInfo />} />
							<Route path="intro" element={<EmployeeIntro />} />
						</Route>
					)}
					{techBooks.length > 0 && (
						<Route
							path="/techbooks"
							element={<PageTechBooks techBooks={techBooks} />}
						>
							<Route path=":id" element={<TechBook />} />
							<Route index element={<TechBookInfo />} />
						</Route>
					)}
				</Routes>
			</div>
		</div>
	);
}

export default App;
