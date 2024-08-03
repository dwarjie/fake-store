import { useEffect, useState } from "react";
import { getAllCart, addToCart } from "../utils/apiCalls";
import Loading from "../components/Loading";
import Error from "../components/Error";
import CartProducts from "../components/CartProducts";

const PersonalCart = () => {
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		getCart();
	}, []);

	const updateLocalStorage = () => {
		try {
			addToCart(cart);
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
		let updatedCart = cart.map((product) => {
			if (product.id === id) {
				product.quantity = updateQuantity("subtract", product.quantity);
			}

			return product;
		});

		setCart(updatedCart);
		updateLocalStorage();
	};

	if (loading) return <Loading />;

	if (error) return <Error message={error} />;

	return (
		<>
			<div className="container grid grid-cols-1 text-dark-blue font-poppins bg-white pt-3 gap-5">
				<div className="flex flex-col gap-2">
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
								/>
							))}
					</div>
				</div>
				<div>
					<h3 className="mb-8 font-bold text-2xl text-dark-blue">
						Order Summary
					</h3>
				</div>
			</div>
		</>
	);
};

export default PersonalCart;
