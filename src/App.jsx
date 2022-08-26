import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageEmployees } from './pages/PageEmployees';
import { PageTechBooks } from './pages/PageTechBooks';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h1>React Router Site</h1>

            <PageWelcome />
            <PageEmployees/>
            <PageTechBooks/>
        </div>
    );
}

export default App;
