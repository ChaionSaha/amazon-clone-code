import React, { useEffect, useState } from "react";

import Product from "../Product/Product";
import "./Shop.scss";

const Shop = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((product) => setProducts(product));
	}, []);

	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const addToCartClick = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		setTotalPrice(totalPrice + product.price);
	};

	return (
		<div className="shop">
			<div className="products">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						addToCartClick={addToCartClick}
					></Product>
				))}
			</div>

			<div className="orders">
				<h3>Order Summary</h3>
				<div className="order-summary">
					<p>Total Selected Items: {cart.length}</p>
					<p>Total Price: ${totalPrice}</p>
				</div>
			</div>
		</div>
	);
};

export default Shop;
