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
							<Link>Home</Link>
							<Link>Categ 1</Link>
							<Link>Categ 2</Link>
							<Link>Categ 3</Link>
							<RiShoppingCart2Line size={"1.4em"} />
						</div>
						<div className="md:hidden ">
							<button className="flex items-center">
								{isOpen ? (
									<IoMdClose className="p1" onClick={openNav} />
								) : (
									<IoMdMenu className="p1" onClick={openNav} />
								)}
							</button>
						</div>
					</nav>
					<div className={`container ${isOpen ? "block" : "hidden"}`}>
						<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white overflow-y-auto">
							<Link>Home</Link>
							<Link>Categ 1</Link>
							<Link>Categ 2</Link>
							<Link>Categ 3</Link>
						</nav>
					</div>
				</div>
			</div>
			<div className="h-screen w-full">
				<Outlet />
			</div>
		</>
	);
};

export default NavigationBar;
