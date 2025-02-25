import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/" className={({ isActive }) => (isActive ? 'active-page' : '')}>Home</NavLink>
				</li>
				<li>
					<NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-page' : '')}>Projects</NavLink>
				</li>
				<li>
					<NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-page' : '')}>Blog</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;