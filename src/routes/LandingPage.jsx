import { fetchCall, fetchProduct } from "../utils/apiCalls";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Products from "../components/Products";

const LandingPage = () => {
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		try {
			const response = await fetchCall("/products?limit=4");
			setProducts(response);
			console.log(response);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	if (loading) return <Loading />;

	if (error) return <Error message={error} />;

	return (
		<>
			<section className="bg-landing-image bg-center bg-no-repeat bg-cover font-poppins">
				<div className="container flex flex-col h-screen justify-center items-start text-white">
					<h1 className="mb-4 font-bold text-4xl">
						NEVER MISS A SINGLE MOMENT
					</h1>
					<p className="mb-4 text-xl text-gray-100">
						Pick the best way to record everything! <br />
						with the best store you trust.
					</p>
					<button className="px-5 py-2.5 font-medium bg-orange rounded-lg">
						Shop Now
					</button>
				</div>
			</section>
			<section className="font-poppins w-full h-full mt-10 mb-8">
				<h2 className="mb-8 font-bold text-3xl text-dark-blue text-center">
					FEATURED PRODUCTS
				</h2>
				<div className="h-full grid grid-cols-1 gap-5 mx-4">
					{products &&
						products.map((product, index) => (
							<Products
								id={product.id}
								key={index}
								name={product.title}
								UrlImage={product.image}
								price={product.price}
							/>
						))}
				</div>
			</section>
		</>
	);
};

export default LandingPage;
