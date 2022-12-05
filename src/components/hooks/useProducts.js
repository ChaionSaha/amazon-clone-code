import React, { useState, useEffect } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
		)
			.then((res) => res.json())
			.then((product) => setProducts(product));
	}, []);
	return [products, setProducts];
};

export default useProducts;
