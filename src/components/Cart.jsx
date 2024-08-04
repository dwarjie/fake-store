import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = ({ resetNav, items }) => {
	return (
		<Link to={"/fake-store/cart"} onClick={resetNav}>
			<div className="relative">
				<RiShoppingCart2Line size={"1.4em"} />
				<span className="absolute text-xs bg-orange p-0.3 px-1 text-red-50 rounded-full -top-1.5 left-4">
					{items > 0 ? items : ""}
				</span>
			</div>
		</Link>
	);
};

export default Cart;
