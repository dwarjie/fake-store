import { IoMdMenu } from "react-icons/io";
import { Outlet } from "react-router-dom";

const NavigationBar = () => {
	return (
		<>
			<div className="w-screen bg-dark-blue">
				<nav className="container relative py-3 flex justify-between items-center text-white">
					<h1 className="font-bold text-2xl">SHOPII</h1>
					<div className="lg:hidden">
						<button className="navbar-budger flex items-center p-3">
							<IoMdMenu />
						</button>
					</div>
				</nav>
			</div>
			<div className="h-screen w-screen">
				<Outlet />
			</div>
		</>
	);
};

export default NavigationBar;
