import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageEmployees } from './pages/PageEmployees';
import { PageTechBooks } from './pages/PageTechBooks';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {

	return (
		<div className="App">
			<h1>React Router Site</h1>
<Nav/>

			<Routes>
				<Route path="/" element={<PageWelcome />}/>
				<Route path="/employees" element={<PageEmployees />}/>
				<Route path="/techbooks" element={<PageTechBooks />}/>
			</Routes>
		</div>
	);
}

export default App;
