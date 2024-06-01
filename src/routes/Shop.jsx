import { IoIosSearch, IoMdClose } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlineFilterAlt, MdOutlineFilterAltOff } from "react-icons/md";
import { useEffect, useState } from "react";
import { fetchCall } from "../utils/apiCalls";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Products from "../components/Products";

const FILTER_VALUE = {
	filter_category: "",
};

const Shop = () => {
	const [filter, setFilter] = useState(FILTER_VALUE);
	const [searchState, setSearchState] = useState(false);
	const [search, setSearch] = useState("");
	const [isFilter, setIsFilter] = useState(false);
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		getAllProducts();
	}, []);

	const getAllProducts = async () => {
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

	const getProductByFilter = async (category) => {
		try {
			setLoading(true);
			const filteredProducts = await fetchCall(
				`/products/category/${category}`
			);
			setProducts(filteredProducts);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const openFilter = () => {
		setIsFilter(!isFilter);
	};

	const handleInputChange = (e) => {
		setFilter({
			filter_category: e.target.value,
		});
	};

	const handleSearchInput = (e) => {
		setSearch(e.target.value);
	};

	const resetFilter = () => {
		setFilter(FILTER_VALUE);
		setLoading(true);
		getAllProducts();
	};

	// TODO:
	// - Once more filter is supported, refactor this code
	const applyFilter = () => {
		if (!filter.filter_category) return;

		getProductByFilter(filter.filter_category);
	};

	const searchProduct = () => {
		if (searchState) {
			setLoading(true);
			setSearchState(false);
			setSearch("");
			getAllProducts();

			return;
		}

		if (!search) return;

		const regexSearch = new RegExp(`${search}`, "gi");
		let searchResult = products.filter(
			(item) => item.title.search(regexSearch) >= 0
		);

		if (searchResult.length > 0) {
			try {
				setLoading(true);
				setSearchState(true);
				setProducts(searchResult);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
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
						value={search}
						onChange={handleSearchInput}
						className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
					/>
					<button
						className="absolute right-0 top-0 bg-orange py-2 px-3 rounded-r-full hover:bg-orange-hover"
						onClick={searchProduct}
					>
						{searchState ? (
							<IoMdClose size={"1.5em"} color="white" />
						) : (
							<IoIosSearch size={"1.5em"} color="white" />
						)}
					</button>
				</div>
				<button
					className={`z-[100] border-2 border-dark-blue p-2 text-dark-blue rounded-full hover:bg-dark-blue hover:text-white ${
						isFilter ? "bg-dark-blue text-white" : ""
					}`}
					onClick={openFilter}
				>
					{isFilter ? (
						<MdOutlineFilterAltOff size={"1.4em"} />
					) : (
						<MdOutlineFilterAlt size={"1.4em"} />
					)}
				</button>
			</div>
			<div
				className={`container text-dark-blue ${isFilter ? "block" : "hidden"}`}
			>
				<div className="z-[90] fixed top-0 left-0 bottom-0 w-full bg-dark-blue opacity-20"></div>
				<nav className="z-[90] fixed top-0 left-0 bottom-0 flex flex-col gap-10 w-5/6 max-w-sm py-6 px-6 bg-dirty-white overflow-y-auto">
					<div>
						<h1 className="font-bold text-base">Search Filter</h1>
						<hr className="h-px mt-3 bg-gray-200 border-0" />
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold text-base">Search by Category</h1>
						<div className="flex items-center ps-4 border border-gray-200 rounded">
							<input
								type="radio"
								name="filter_category"
								id="men_clothing"
								value={"men's clothing"}
								checked={filter.filter_category == "men's clothing"}
								onChange={handleInputChange}
								className="w-4 h-4 bg-gray-100 border-gray-300"
							/>
							<label
								htmlFor="men_clothing"
								className="w-full py-2 ms-4 font-medium"
							>
								Men's Clothing
							</label>
						</div>
						<div className="flex items-center ps-4 border border-gray-200 rounded">
							<input
								type="radio"
								name="filter_category"
								id="women_clothing"
								value={"women's clothing"}
								checked={filter.filter_category == "women's clothing"}
								onChange={handleInputChange}
								className="w-4 h-4 bg-gray-100 border-gray-300"
							/>
							<label
								htmlFor="women_clothing"
								className="w-full py-2 ms-4 font-medium"
							>
								Women's Clothing
							</label>
						</div>
					</div>
					<div className="flex justify-evenly items-center gap-3 text-sm">
						<button
							className="w-full px-3 py-2.5 rounded-lg transition text-orange border-2 border-orange-hover hover:bg-orange-hover hover:text-white"
							onClick={resetFilter}
						>
							RESET
						</button>
						<button
							className="w-full px-3 py-2.5 bg-orange rounded-lg flex items-center justify-center gap-1 transition hover:bg-orange-hover text-white"
							onClick={applyFilter}
						>
							APPLY
						</button>
					</div>
					<div className="mt-auto">
						<button className="w-full px-5 py-2.5 font-medium bg-orange rounded-lg flex items-center justify-center gap-1 transition hover:bg-orange-hover text-white">
							<RiShoppingCart2Line size={"1.4em"} />
							View Cart
						</button>
					</div>
				</nav>
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
