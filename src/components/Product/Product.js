import React from "react";
import "./Product.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
	const { product, addToCartClick } = props;
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
				<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Product;
