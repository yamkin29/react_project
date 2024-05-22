import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Routes>
                            <Route path="/" element={<LoginPage/>}/>
                            <Route path="/MainPage" element={<MainPage/>}/>
                        </Routes>
                    </header>
                </div>
            </Router>
        );
    }
}

export default App;
