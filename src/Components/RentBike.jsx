import Slider from "./Slider";
import "../Scss/Components/RentBike.scss";

const RentBike = () => {
  return (
    <>
      <section className="rent">
        <Slider />
        <div className="wrapper">
          <section className="rent__body">
            <h2 className="rent__title">Rentiraj biciklu kod nas.</h2>
            <p className="rent__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dicta
              aut nam eos distinctio, iste dolorem molestiae, consequuntur sed
              deleniti illo voluptatem natus! Minima omnis recusandae eveniet
              repellendus, qui asperiores iste necessitatibus dolor error eos
              repellat corrupti animi suscipit facilis maxime cumque? Enim
              pariatur totam inventore error reiciendis porro impedit.
            </p>
            <p className="rent__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dicta
              aut nam eos distinctio, iste dolorem molestiae, consequuntur sed
              deleniti illo voluptatem natus! Minima omnis recusandae eveniet
              repellendus, qui asperiores iste necessitatibus dolor error eos
              repellat corrupti animi suscipit facilis maxime cumque? Enim
              pariatur totam inventore error reiciendis porro impedit.
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default RentBike;
