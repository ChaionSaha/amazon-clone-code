import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import auth from './../../firebase.init';
import './Header.scss';

const Header = () => {
	const [user] = useAuthState(auth);
	const [signOut] = useSignOut(auth);
	const handleSignOut = () => {
		signOut();
	};

	let activeStyle = {
		color: '#ff9900',
	};
	return (
		<nav className='header'>
			<img src={logo} alt='Logo' className='logo' />
			<div className='links'>
				<NavLink
					to='/shop'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Shop
				</NavLink>
				<NavLink
					to='/order'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Order
				</NavLink>
				<NavLink
					to='/inventory'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Inventory
				</NavLink>

				{user ? (
					<button className='signOut' onClick={handleSignOut}>
						Sign Out
					</button>
				) : (
					<NavLink
						to='/login'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Login
					</NavLink>
				)}
			</div>
		</nav>
	);
};

export default Header;
