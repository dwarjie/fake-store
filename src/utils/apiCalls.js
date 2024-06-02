const apiUrl = "https://fakestoreapi.com";

const fetchCall = async (url) => {
	const response = await fetch(`${apiUrl}${url}`)
		.then((data) => {
			return data.json();
		})
		.catch((err) => {
			throw new Error(err);
		});

	return response;
};

const addToCart = async (products) => {
	const response = await fetch(`${apiUrl}/carts`, {
		method: "POST",
		body: JSON.stringify(products),
	})
		.then((data) => {
			return data.json();
		})
		.catch((err) => {
			throw new Error(err);
		});

	return response;
};

const getAllCart = async () => {
	const response = await fetch(`${apiUrl}/carts/user/30`)
		.then((data) => {
			return data.json();
		})
		.catch((err) => {
			throw new Error(err);
		});

	return response;
};

const fetchProduct = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id: 1, name: "Sample Product" });
		}, 5000); // Simulating a 2-second delay
	});
};

export { fetchCall, fetchProduct, addToCart, getAllCart };
