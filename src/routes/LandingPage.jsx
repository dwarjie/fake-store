function LandingPage() {
	return (
		<div className="h-screen w-sreen">
			<nav className="w-screen bg-dark-blue flex flex-row">
				<div className="container">
					<h1>Shopii</h1>
				</div>
			</nav>
			<div className="h-screen bg-landing-image bg-center bg-no-repeat bg-cover font-poppins">
				<div className="container flex flex-col h-screen justify-center items-start text-white">
					<h1 className="font-bold text-4xl">NEVER MISS A SINGLE MOMENT</h1>
					<p className="font-medium text-lg">
						Pick the best way to record everything! <br />
						with the best store you trust.
					</p>
					<button className="w-auto">Shop Now</button>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
