import { RiShoppingCart2Line } from "react-icons/ri";
import PropTypes from "prop-types";

const Products = (props) => {
	return (
		<div className="max-w-full bg-white flex flex-col rounded-lg border border-gray-100 shadow-md">
			<div className="p-4">
				<img
					src={props.UrlImage}
					alt={props.name}
					className="rounded-t-lg max-w-[60%] h-auto mx-auto"
				/>
			</div>
			<div className="flex justify-between items-start px-2 pt-5">
				<div className="p-2 mb-4 flex-grow">
					<h3 className="text-lg">{props.name}</h3>
					<div className="flex gap-2 items-end mt-2">
						<h3 className="text-2xl font-bold text-orange">{`$${props.price}`}</h3>
						<p className="text-base text-dark-blue line-through">{`$${
							props.price - 10
						}`}</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center px-2 pb-2 text-white">
				<button className="w-full px-5 py-2.5 font-medium bg-orange rounded-lg flex items-center justify-center gap-1">
					<RiShoppingCart2Line size={"1.4em"} />
					Add to Cart
				</button>
			</div>
		</div>
	);
};

Products.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	UrlImage: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default Products;
