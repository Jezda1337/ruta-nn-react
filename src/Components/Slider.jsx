import { SliderData } from "./SliderData";
import Carousel from "react-multi-carousel";
import "../Scss/Components/Slider.scss";
const Slider = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        autoPlay
        arrows={true}
        autoPlaySpeed={2000}
        draggable
        focusOnSelect={false}
        infinite
        minimumTouchDrag={80}
      >
        {SliderData.map((slide) => {
          return <img key={slide.id} src={slide.image} alt={slide.alt} />;
        })}
      </Carousel>
    </>
  );
};

export default Slider;
