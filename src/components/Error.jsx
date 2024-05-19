import PropTypes from "prop-types";

const Error = (props) => {
	return (
		<div className="z-50 w-screen h-screen bg-white text-black">
			<h1>Error</h1>
			<p>{props.message}</p>
		</div>
	);
};

Error.propTypes = {
	message: PropTypes.string.isRequired,
};

Error.defaultProps = {
	message: "Error: Something Went Wrong",
};

export default Error;
