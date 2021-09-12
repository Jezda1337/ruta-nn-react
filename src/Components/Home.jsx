import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import "../Scss/Components/Home.scss";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="wrapper">
          <section className="home__body">
            <figure className="home__logo">
              <img width="80" height="80" src={Logo} alt="Logo" />
            </figure>

            <h1 className="home__title">Ruta NN</h1>

            <p className="home__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              iusto a obcaecati at debitis nisi excepturi minima quis impedit
              accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda iusto a obcaecati at debitis nisi excepturi minima quis
              impedit accusamus.
            </p>

            <section className="home__buttons">
              <Link to="/form" className="btn home__btn">
                konkurisi
              </Link>
              <Link to="/rent" className="btn home__btn">
                rent a bike
              </Link>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
