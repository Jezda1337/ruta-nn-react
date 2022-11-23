import { Link } from "react-router-dom";
// import Logo from "../Assets/Logo.svg";

import { useEffect, useState } from "react";
import { sliderHome } from "./SliderData";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const images = () => {
    if (counter >= sliderHome.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    let t = setTimeout(() => {
      images();
    }, 5000);

    return () => {
      clearInterval(t);
    };
  }, [counter]);
  return (
    <>
      <section className="home">
        <div className="home__bg">
          {sliderHome.map((img) => (
            <img
              className="home__bg-img"
              key={img.id}
              src={img.image}
              alt={img.alt}
              srcSet={img.phone}
              style={{ opacity: counter === img.id ? 1 : 0 }}
            />
          ))}
        </div>

        <div className="wrapper">
          <section className="home__body">
            <figure className="home__logo">
              {/* <img width="80" height="80" src={Logo} alt="Logo" /> */}
            </figure>

            <h1 className="home__title">Ruta NN</h1>

            <p className="home__text">
              Zelite dinamican posao i dobru zaradu? RutaNN je agencija koja
              zaposljava dostavljace na poznatim platformama za dostavu sirom
              Srbije (Beograd, Novi Sad, Nis, Kragujevac, Subotica, Pancevo).
              <br />
              Mozete raditi svojim ili firminim vozilom. Postanite deo tima vec
              danas.
            </p>

            <section className="home__buttons">
              <Link to="/form" className="btn home__btn">
                KONKURISI
              </Link>
              <Link to="/rent" className="btn home__btn">
                RENT A BIKE
              </Link>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
