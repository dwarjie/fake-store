import Footer from "../components/Footer";

const Shop = () => {
	return (
		<>
			<section className="font-poppins bg-white">
				<div className="container flex flex-col min-h-[60%] justify-center items-start text-white">
					<h1 className="mb-4 font-bold text-4xl lg:text-5xl">
						NEVER MISS A SINGLE MOMENT
					</h1>
					<p className="mb-4 text-xl text-gray-100 lg:text-2xl">
						Pick the best way to record everything! <br />
						with the best store you trust.
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Shop;
