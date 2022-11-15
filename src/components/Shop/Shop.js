import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

import Product from "../Product/Product";
import "./Shop.scss";

const Shop = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
		)
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

			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
