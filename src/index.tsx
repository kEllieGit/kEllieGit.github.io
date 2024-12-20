import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Copyright from './components/Copyright';
import SeasonManager from './components/SeasonManager';
import Home from './pages/Home';
import './styles.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Router>
            <SeasonManager />
            <Home />
            <Copyright />
        </Router>
    );
}