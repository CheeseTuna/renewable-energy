import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Over } from './pages';
import './App.css';  // Import the CSS file

const App = () => (
    <div className="app__container">
        <NavBar />
        <div className="app__content">
            <Over />
        </div>
    </div>
);

export default App;
