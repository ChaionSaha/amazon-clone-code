import { useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/products')
			.then((res) => res.json())
			.then((product) => setProducts(product));
	}, []);
	return [products, setProducts];
};

export default useProducts;
