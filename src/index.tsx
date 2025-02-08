import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Copyright from './components/Copyright';
import SeasonManager from './components/SeasonManager';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import './styles.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Router>
            <SeasonManager />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Copyright />
        </Router>
    );
}