const apiUrl = "https://fakestoreapi.com";

const fetchCall = async (url) => {
	const response = await fetch(`${apiUrl}${url}`)
		.then((data) => {
			// throw new Error(`HTTP error: `);
			return data.json();
		})
		.catch((err) => {
			throw new Error(`HTTP error: ${err}`);
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

export { fetchCall, fetchProduct };
