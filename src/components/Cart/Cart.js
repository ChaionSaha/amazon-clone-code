import React from "react";
import "./Cart.scss";

const Cart = ({ cart }) => {
	return (
		<div className="orders">
			<h3>Order Summary</h3>
			<div className="order-summary">
				<p>Total Selected Items: {cart.length}</p>
			</div>
		</div>
	);
};

export default Cart;
