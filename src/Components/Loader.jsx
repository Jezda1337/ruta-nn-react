import Lottie from "lottie-react";
import animation from "../animations/loader.json";

const Loader = () => {
	return (
		<div className="loader">
			<Lottie animationData={animation} />
		</div>
	);
};

export default Loader;
