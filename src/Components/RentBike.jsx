import { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import "../Scss/Components/RentBike.scss";

const RentBike = () => {
  const [counter, setCounter] = useState(0);
  const length = SliderData.length;
  function nextSlide() {
    setCounter(counter === length - 1 ? 0 : counter + 1);
  }

  useEffect(() => {
    setTimeout(nextSlide, 3000);
  });

  return (
    <>
      <section className="slider">
        <ul className="slider__list">
          {SliderData.map((slide) => {
            return <img src={slide.image} alt={slide.alt} key={slide.id} />;
          })}
          {/* <img src={SliderData[counter].image} /> */}
        </ul>
      </section>
    </>
  );
};

export default RentBike;
