import { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";

const NavigationBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="w-full bg-dark-blue font-poppins">
				<div className="container">
					<nav className="py-3 flex justify-between items-center text-white">
						<h1 className="font-bold text-2xl">SHOPII</h1>
						<div className="hidden md:flex gap-6">
							<Link to={"/fake-store"}>Home</Link>
							<Link>Shop</Link>
							<Link>Contact Us</Link>
							<Link>Services</Link>
							<RiShoppingCart2Line size={"1.4em"} />
						</div>
						<div className="z-50 md:hidden">
							<button className="flex items-center">
								{isOpen ? (
									<IoMdClose className="p1" onClick={openNav} />
								) : (
									<IoMdMenu className="p1" onClick={openNav} />
								)}
							</button>
						</div>
					</nav>
					<div
						className={`container text-dark-blue ${
							isOpen ? "block" : "hidden"
						}`}
					>
						<div className="z-40 fixed top-0 left-0 bottom-0 w-full bg-dark-blue opacity-35"></div>
						<nav className="z-50 fixed top-0 left-0 bottom-0 flex flex-col gap-10 w-5/6 max-w-sm py-6 px-6 bg-dirty-white overflow-y-auto">
							<div>
								<h1 className="font-bold text-3xl">SHOPII</h1>
								<hr className="h-px mt-3 bg-gray-200 border-0" />
							</div>
							<div className="flex flex-col gap-5">
								<Link to={"/fake-store"} className="nav-item-hover">
									Home
								</Link>
								<Link className="nav-item-hover">Shop</Link>
								<Link className="nav-item-hover">Contact Us</Link>
								<Link className="nav-item-hover">Services</Link>
								<hr className="h-px mt-3 bg-gray-200 border-0" />
							</div>
							<div>
								<button className="w-full px-5 py-2.5 font-medium bg-orange rounded-lg flex items-center justify-center gap-1 transition hover:bg-orange-hover text-white">
									<RiShoppingCart2Line size={"1.4em"} />
									View Cart
								</button>
							</div>
						</nav>
					</div>
				</div>
			</div>
			<div className="h-auto w-full">
				<Outlet />
			</div>
		</>
	);
};

export default NavigationBar;
