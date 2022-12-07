import React from 'react';
import useProducts from './../hooks/useProducts';
import './Order.scss';
import useCart from './../hooks/useCart';
import OrderedProduct from '../OrderedProduct/OrderedProduct';
import useCartCalculation from './../hooks/useCartCalculation';
import { CreditCardOutline, TrashOutline } from 'heroicons-react';
import { removeFromDb } from '../Localstorage/Localstorage';

const Order = () => {
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);
	const [total, shippingCost, quantity, tax, grandTotal] =
		useCartCalculation(cart);

	const clearCart = () => {
		localStorage.removeItem('storedCart');
		setCart([]);
	};
	const removeItem = (id) => {
		let newCart = [...cart];
		let index = newCart.findIndex((p) => {
			return p.id === id;
		});
		console.log(id);
		newCart.splice(index, 1);
		setCart(newCart);
		removeFromDb(id);
	};

	return (
		<div className='review'>
			<div className='items'>
				{cart.map((product) => {
					return (
						<OrderedProduct
							key={product.id}
							product={product}
							removeItem={removeItem}
						></OrderedProduct>
					);
				})}
			</div>
			<div className='summary'>
				<div className='summary-details'>
					<h1>Order Summary</h1>
					<p className='total-items'>
						<span>Selected Items: </span>
						{quantity}
					</p>
					<p className='total-price'>
						<span>Total Price: </span>${total}
					</p>
					<p className='total-shipping'>
						<span>Total Shipping Charge: </span>${shippingCost}
					</p>
					<p className='total-tax'>
						<span>Tax: </span>${tax}
					</p>
					<p className='grand-total'>
						<span>Grand Total: </span>
						{grandTotal}
					</p>
				</div>
				<div className='btns'>
					<button className='clear' onClick={clearCart}>
						Clear Cart
						<TrashOutline className='btns-icon'></TrashOutline>
					</button>
					<button className='chk-out'>
						Proceed Checkout
						<CreditCardOutline className='btns-icon'></CreditCardOutline>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Order;
