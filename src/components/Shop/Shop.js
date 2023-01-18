import React from 'react';
import Cart from '../Cart/Cart';
import { addToDB } from '../Localstorage/Localstorage';
import Product from '../Product/Product';
import useCart from '../hooks/useCart';
import useProducts from './../hooks/useProducts';
import './Shop.scss';

const Shop = () => {
	// Fetching Products information
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);

	// Cart Information Update
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
				<Cart cart={cart} setCart={setCart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
