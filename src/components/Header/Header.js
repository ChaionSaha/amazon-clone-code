import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.scss";

const Header = () => {
	return (
		<nav className="header">
			<img src={logo} alt="Logo" className="logo" />
			<div className="links">
				<a href="/order">Shop</a>
				<a href="/order-review">Order</a>
				<a href="/inventory">Inventory</a>
				<a href="/login">Login</a>
			</div>
		</nav>
	);
};

export default Header;
