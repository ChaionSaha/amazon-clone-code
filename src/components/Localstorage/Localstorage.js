const addToDB = (id) => {
	const storage = getCart();

	if (storage[id]) {
		storage[id]++;
	} else {
		storage[id] = 1;
	}

	localStorage.setItem("storedCart", JSON.stringify(storage));
};

const getCart = () => {
	let storage = {};

	if (localStorage.getItem("storedCart")) {
		storage = JSON.parse(localStorage.getItem("storedCart"));
	}

	return storage;
};

export { addToDB, getCart };
