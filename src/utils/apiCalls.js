import { Cart } from "./data";
import { Save } from "./localStorage";

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
	if (!localStorage.getItem(Cart.STORAGE_NAME))
		localStorage.setItem(Cart.STORAGE_NAME, JSON.stringify(Cart.personal_cart));

	try {
		Cart.personal_cart.cart.push(products);
		Save();
		return true;
	} catch (err) {
		throw new Error(err.message);
	}
};

const getAllCart = () => {
	if (!localStorage.getItem(Cart.STORAGE_NAME))
		localStorage.setItem(Cart.STORAGE_NAME, JSON.stringify(Cart.personal_cart));

	try {
		Cart.personal_cart = localStorage.getItem(Cart.STORAGE_NAME);
		console.log(Cart.personal_cart);

		return true;
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

export { fetchCall, fetchProduct, addToCart, getAllCart };
