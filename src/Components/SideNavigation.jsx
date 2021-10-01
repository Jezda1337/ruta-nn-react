import { Link } from "react-router-dom";

// import "../Scss/Components/SideNavigation.scss";
import { SocialMedia } from "../Components";

const SideNavigation = ({ show, path }) => {
  return (
    <>
      <nav className={`sideNav ${show ? "openNav" : ""}`}>
        <ul className={`sideNav__list ${show ? "open" : ""}`}>
          <li className="sideNav__item">
            <Link onClick={path} className="sideNav__link" to="/">
              pocetna
            </Link>
          </li>

          <li className="sideNav__item">
            <Link onClick={path} className="sideNav__link" to="/about">
              o nama
            </Link>
          </li>

          <li className="sideNav__item">
            <Link onClick={path} className="sideNav__link" to="/rent">
              rent a bike
            </Link>
          </li>

          <li className="sideNav__item">
            <Link onClick={path} className="sideNav__btn" to="/form">
              konkurisi
            </Link>
          </li>

          <li className="sideNav__item">
            <SocialMedia />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideNavigation;
