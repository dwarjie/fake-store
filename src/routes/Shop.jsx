const Shop = () => {
	return (
		<>
			<section className="bg-landing-image bg-center bg-no-repeat bg-cover font-poppins">
				<div className="container flex flex-col h-screen justify-center items-start text-white">
					<h1 className="mb-4 font-bold text-4xl lg:text-5xl">
						NEVER MISS A SINGLE MOMENT
					</h1>
					<p className="mb-4 text-xl text-gray-100 lg:text-2xl">
						Pick the best way to record everything! <br />
						with the best store you trust.
					</p>
					<button className="px-5 py-2.5 font-medium bg-orange rounded-lg transition hover:bg-orange-hover">
						Shop Now
					</button>
				</div>
			</section>
			<section className="font-poppins w-full mt-10 mb-8 xl:w-[80%] xl:mx-auto">
				<h2 className="mb-8 font-bold text-3xl text-dark-blue text-center">
					FEATURED PRODUCTS
				</h2>
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
