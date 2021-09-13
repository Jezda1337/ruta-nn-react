import { useEffect, useState } from "react";
import { SliderData } from "./SliderData";

import "../Scss/Components/Slider.scss";
const Slider = () => {
  const [counter, setCounter] = useState(0);
  const length = SliderData.length;

  function nextSlide() {
    setCounter(counter === length - 1 ? 0 : counter + 1);
  }

  useEffect(() => {
    let t = setTimeout(nextSlide, 3000);
    return () => {
      clearTimeout(t);
    };
  });

  return (
    <>
      <section className="slider">
        <ul className="slider__list" style={{ left: `-${counter}00%` }}>
          {SliderData.map((slide) => {
            return (
              <img
                className="slider__image"
                src={slide.image}
                alt={slide.alt}
                key={slide.id}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Slider;
