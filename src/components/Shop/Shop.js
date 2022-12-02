import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDB, findItem, getCart } from '../Localstorage/Localstorage';
import Product from '../Product/Product';
import './Shop.scss';

const Shop = () => {
	// Fetching Products information
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
		)
			.then((res) => res.json())
			.then((product) => setProducts(product));
	}, []);

	// Cart Information Update
	const [cart, setCart] = useState([]);
	const addToCartClick = (product) => {
		const exists = cart.find((cartItem) => cartItem.id === product.id);
		let newCart = [];
		if (!exists) {
			product.quantity = 1;
			newCart = [...cart, product];
		} else {
			const rest = cart.filter((item) => item.id !== product.id);
			product.quantity++;
			newCart = [...rest, product];
		}

		setCart(newCart);
		addToDB(product.id);
	};

	useEffect(() => {
		const storedCart = getCart();
		let savedCart = [];

		for (const id in storedCart) {
			const foundProduct = products.find((product) => {
				return id === product.id;
			});

			if (foundProduct) {
				foundProduct.quantity = storedCart[id];
				savedCart.push(foundProduct);
			}
		}
		setCart(savedCart);
	}, [products]);

	return (
		<div className='shop'>
			<div className='products'>
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						addToCartClick={addToCartClick}
					></Product>
				))}
			</div>

			<div className='cart-container'>
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
