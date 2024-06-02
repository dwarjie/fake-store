import { useEffect } from "react";
import { getAllCart } from "../utils/apiCalls";

const Cart = () => {
	useEffect(() => {
		getCart();
	}, []);

	const getCart = async () => {
		try {
			const response = await getAllCart();
			console.log(response);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<div className="container grid grid-cols-1 text-dark-blue font-poppins bg-white pt-3 gap-5">
				<div>
					<h3 className="mb-8 font-bold text-2xl text-dark-blue">
						Shopping Cart
					</h3>
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

export default Cart;
