import { IoIosSearch } from "react-icons/io";
import { MdOutlineFilterAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { fetchCall } from "../utils/apiCalls";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Products from "../components/Products";

const Shop = () => {
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		try {
			const [mens, womens] = await Promise.all([
				fetchCall("/products/category/men's clothing"),
				fetchCall("/products/category/women's clothing"),
			]);
			setProducts([...mens, ...womens]);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	if (loading) return <Loading />;

	if (error) return <Error />;

	return (
		<>
			<div className="container flex justify-end items-center text-dark-blue font-poppins bg-white pt-3 gap-5">
				<div className="w-auto relative text-gray-600">
					<input
						type="search"
						name="search"
						placeholder="Search"
						className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
					/>
					<button className="absolute right-0 top-0 mt-2 mr-3">
						<IoIosSearch size={"1.5em"} opacity={0.5} />
					</button>
				</div>
				<button className="border-2 border-dark-blue p-2 text-dark-blue rounded-full hover:bg-dark-blue hover:text-white">
					<MdOutlineFilterAlt size={"1.4em"} />
				</button>
			</div>
			<section className="font-poppins w-full mt-10 mb-8 xl:w-[80%] xl:mx-auto">
				<div className="h-full grid grid-cols-1 gap-5 mx-4 md:grid-cols-2 lg:grid-cols-4">
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
			<Footer />
		</>
	);
};

export default Shop;
