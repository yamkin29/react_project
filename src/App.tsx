import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Styles/App.css';
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import GpaGeneral from "./Components/GpaGeneral";

function App(): React.ReactElement{
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<GpaGeneral/>}/>
                    <Route path="/MainPage" element={<MainPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
