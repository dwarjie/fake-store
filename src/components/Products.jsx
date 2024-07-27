import { RiShoppingCart2Line } from "react-icons/ri";
import PropTypes from "prop-types";

const Products = ({ id, UrlImage, name, price, addToCart}) => {	
	return (
		<div
			className="max-w-full bg-white flex flex-col rounded-lg border border-gray-100 shadow-md"
			data-testid="product-element"
		>
			<div className="p-4">
				<img
					src={UrlImage}
					alt={name}
					className="rounded-t-lg max-w-[60%] mx-auto md:h-52 md:object-scale-down"
				/>
			</div>
			<div className="flex justify-between items-start px-2 pt-5">
				<div className="p-2 flex-grow h-28 lg:h-36">
					<h3 className="text-lg lg:text-base">{name}</h3>
					<div className="flex gap-2 items-end mt-2">
						<h3 className="text-2xl font-bold text-orange">{`$${price}`}</h3>
						<p className="text-base text-dark-blue line-through">{`$${Math.round(
							price - 3
						)}`}</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center px-2 pb-2 text-white">
				<button
					className="w-full px-5 py-2.5 font-medium bg-orange rounded-lg flex items-center justify-center gap-1 transition hover:bg-orange-hover"
					onClick={() =>
						addToCart(id, UrlImage, name, price)
					}
				>
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
	addToCart: PropTypes.func.isRequired,
};

export default Products;
