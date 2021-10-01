import Lottie from "lottie-react";
import animation from "../animations/22588-delivery-man-in-a-scooter-with-mask.json";

const Loader = () => {
  return (
    <div className="loader">
      <Lottie animationData={animation} />
    </div>
  );
};

export default Loader;
