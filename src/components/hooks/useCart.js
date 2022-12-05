import { getCart } from '../Localstorage/Localstorage';
import { useState, useEffect } from 'react';

const useCart = (products) => {
	const [cart, setCart] = useState([]);

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

	return [cart, setCart];
};

export default useCart;
