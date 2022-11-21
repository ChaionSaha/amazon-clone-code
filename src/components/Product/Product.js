import React from "react";
import "./Product.scss";

import { ShoppingCartOutline } from "heroicons-react/build";

const Product = ({ product, addToCartClick }) => {
	const { img, name, price, ratings, seller } = product;
	return (
		<div className="product">
			<img src={img} alt="product" className="product-image" />
			<div className="product-details">
				<p className="name">{name}</p>
				<p className="price">Price: ${price}</p>
				<p className="manufacturer">Manufacturer: {seller}</p>
				<p className="rating">Rating: {ratings}star</p>
			</div>
			<button onClick={() => addToCartClick(product)}>
				<p>Add To Cart</p>
				<ShoppingCartOutline className="shopping-cart"></ShoppingCartOutline>
			</button>
		</div>
	);
};

export default Product;
