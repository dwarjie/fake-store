const apiUrl = "https://fakestoreapi.com";

const fetchCall = async (url) => {
	const response = await fetch(`${apiUrl}${url}`)
		.then((data) => {
			return data.json();
		})
		.catch((err) => console.log(err));

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
