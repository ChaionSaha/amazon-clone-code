import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.scss';

const Header = () => {
	let activeStyle = {
		color: '#ff9900',
	};
	return (
		<nav className='header'>
			<img src={logo} alt='Logo' className='logo' />
			<div className='links'>
				<NavLink
					to='amazon-clone/shop'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Shop
				</NavLink>
				<NavLink
					to='amazon-clone/order'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Order
				</NavLink>
				<NavLink
					to='amazon-clone/inventory'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Inventory
				</NavLink>
				<NavLink
					to='amazon-clone/login'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Login
				</NavLink>
			</div>
		</nav>
	);
};

export default Header;
