import { useEffect, useState } from "react";
import {
	getAllCart,
	addToCart,
	getCartItems,
	getSubTotal,
} from "../utils/apiCalls";
import Loading from "../components/Loading";
import Error from "../components/Error";
import CartProducts from "../components/CartProducts";
import EmptyCart from "../components/EmptyCart";
import { Link, useOutletContext } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const PersonalCart = () => {
	const [cartItems, setCartItems] = useOutletContext();
	const [cart, setCart] = useState([]);
	const [subTotal, setSubTotal] = useState(0.0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		getCart();
		setCartItems(getCartItems());
		setSubTotal(getSubTotal());
	}, []);

	const updateLocalStorage = () => {
		try {
			addToCart(cart);
			setCartItems(getCartItems());
			setSubTotal(getSubTotal());
		} catch (err) {
			setError(err.message);
		}
	};

	const getCart = () => {
		try {
			const response = getAllCart();
			setCart(response);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const updateQuantity = (method, quantity) => {
		let parsedQuantity = parseInt(quantity);
		switch (method) {
			case "subtract":
				parsedQuantity--;
				break;
			case "add":
				parsedQuantity++;
				break;
			default:
				parsedQuantity++;
		}

		return parsedQuantity;
	};

	const addQuantity = (id) => {
		let updatedCart = cart.map((product) => {
			if (product.id === id) {
				product.quantity = updateQuantity("add", product.quantity);
			}

			return product;
		});

		setCart(updatedCart);
		updateLocalStorage();
	};

	const subQuantity = (id) => {
		let zeroQuantity = false;
		let updatedCart = cart.map((product) => {
			if (product.id === id) {
				product.quantity = updateQuantity("subtract", product.quantity);
				if (product.quantity <= 0) zeroQuantity = true;
			}

			return product;
		});

		if (zeroQuantity) return removeProduct(id);

		setCart(updatedCart);
		updateLocalStorage();
	};

	const removeProduct = (id) => {
		let updatedCart = cart.filter((product) => {
			return product.id !== id;
		});

		setCart(updatedCart);
		addToCart(updatedCart);
		setCartItems(getCartItems());
		setSubTotal(getSubTotal());
	};

	const getCartSubTotal = () => {
		return subTotal.toFixed(2);
	};

	const getTax = () => {
		return (subTotal * 0.12).toFixed(2);
	};

	const getTotal = () => {
		return (parseFloat(getCartSubTotal()) + parseFloat(getTax())).toFixed(2);
	};

	const checkout = () => toast("I got your 💵 now!");

	if (loading) return <Loading />;

	if (error) return <Error message={error} />;

	if (cart.length <= 0) return <EmptyCart />;

	return (
		<>
			<div className="container grid grid-cols-1 text-dark-blue font-poppins bg-white pt-3 gap-5 lg:grid-cols-3 lg:gap-10">
				<div className="flex flex-col col-span-2">
					<h3 className="font-bold text-2xl text-dark-blue">Shopping Cart</h3>
					<hr className="h-px mt-1 bg-gray-200 border-0" />
					<div className="grid grid-cols-1 gap-5">
						{cart &&
							cart.map((item, index) => (
								<CartProducts
									id={item.id}
									key={index}
									UrlImage={item.urlImage}
									name={item.name}
									price={item.price}
									quantity={item.quantity}
									date={item.date}
									addQuantity={addQuantity}
									subQuantity={subQuantity}
									removeProduct={removeProduct}
								/>
							))}
					</div>
					<Toaster />
				</div>
				<div className="w-auto">
					<h3 className="font-bold text-2xl text-dark-blue">Order Summary</h3>
					<hr className="h-px mt-2 mb-5 bg-gray-200 border-0" />
					<div className="flex flex-row justify-between">
						<h3 className="text-md text-gray-500">Subtotal:</h3>
						<h3 className="text-md text-gray-500">{`$${getCartSubTotal()}`}</h3>
					</div>
					<div className="flex flex-row justify-between">
						<h3 className="text-md text-gray-500">Tax:</h3>
						<h3 className="text-md text-gray-500">{`$${getTax()}`}</h3>
					</div>
					<hr className="h-px mt-2 mb-5 bg-gray-200 border-0" />
					<div className="flex flex-row justify-between mb-10">
						<h3 className="text-2xl font-bold text-dark-blue">Total</h3>
						<h3 className="text-2xl font-bold text-dark-blue">{`$${getTotal()}`}</h3>
					</div>
					<Link to={"/fake-store/shop"}>
						<button className="w-full py-2.5 mb-2 font-medium rounded-lg border border-orange transition hover:bg-orange hover:text-white">
							Continue Shopping
						</button>
					</Link>
					<button
						className="w-full py-2.5 font-medium rounded-lg bg-orange text-white transition hover:bg-orange-hover"
						onClick={checkout}
					>
						Checkout
					</button>
				</div>
			</div>
		</>
	);
};

export default PersonalCart;
