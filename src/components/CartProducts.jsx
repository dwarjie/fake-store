import PropTypes from "prop-types";

const CartProducts = (props) => {
	return (
		<>
			<div className="flex flex-row">
				<img
					src={props.UrlImage}
					alt={props.name}
					className="max-w-[60%] mx-auto md:h-52 md:object-scale-down"
				/>
				<div className="flex flex-col">
					<div className="flex flex-row">
						<h4>{props.name}</h4>
						<p>{props.price}</p>
					</div>
					<div className="flex flex-row"></div>
				</div>
			</div>
		</>
	);
};

CartProducts.propTypes = {
	id: PropTypes.number.isRequired,
	UrlImage: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	date: PropTypes.instanceOf(Date),
};

export default CartProducts;
