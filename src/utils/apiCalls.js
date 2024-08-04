import { Cart } from "./data";

const apiUrl = "https://fakestoreapi.com";

const fetchCall = async (url) => {
	const response = await fetch(`${apiUrl}${url}`, {
		mode: "cors",
	})
		.then((data) => {
			return data.json();
		})
		.catch((err) => {
			throw new Error(err);
		});

	return response;
};

const addToCart = (products) => {
	try {
		return localStorage.setItem(Cart.STORAGE_NAME, JSON.stringify(products));
	} catch (err) {
		throw new Error(err.message);
	}
};

const getAllCart = () => {
	try {
		const cartStorage = JSON.parse(localStorage.getItem(Cart.STORAGE_NAME));
		if (cartStorage) {
			return cartStorage;
		} else {
			localStorage.setItem(Cart.STORAGE_NAME, JSON.stringify([]));
			return [];
		}
	} catch (err) {
		throw new Error(err.message);
	}
};

const getCartItems = () => {
	try {
		const cartStorage =
			JSON.parse(localStorage.getItem(Cart.STORAGE_NAME)) || [];
		const sum = cartStorage.reduce((accum, item) => accum + item.quantity, 0);

		return sum;
	} catch (err) {
		throw new Error(err.message);
	}
};

const fetchProduct = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id: 1, name: "Sample Product" });
		}, 5000); // Simulating a 2-second delay
	});
};

export { fetchCall, fetchProduct, addToCart, getAllCart, getCartItems };
