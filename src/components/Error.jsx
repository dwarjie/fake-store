// import PropTypes from "prop-types";

const Error = ({ message = "Contact me on my LinkedIn and please give me a job 🥺" }) => {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-4">
			<h2 className="font-medium text-lg text-red-500">
				Oh no! Something went Wrong.
			</h2>
			<p>{message}</p>
		</div>
	);
};

// Error.propTypes = {
// 	message: PropTypes.string.isRequired,
// };

// Error.defaultProps = {
// 	message: "Contact me on my LinkedIn and please give me a job 🥺",
// };

export default Error;
