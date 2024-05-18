import { fetchCall, fetchProduct } from "../utils/apiCalls";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useEffect, useState } from "react";

const LandingPage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {});

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
			<section></section>
		</>
	);
};

export default LandingPage;
