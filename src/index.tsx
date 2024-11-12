import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Copyright from './components/Copyright'
import './styles.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <>
            <Navbar />
            <Copyright />
        </>
    );
}