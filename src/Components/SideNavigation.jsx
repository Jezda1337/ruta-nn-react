import { Link } from "react-router-dom";

import "../Scss/Components/SideNavigation.scss";
import SocialMedia from "./SocialMedia";

const SideNavigation = (props) => {
  return (
    <>
      <nav className={`sideNav ${props.show ? "openNav" : ""}`}>
        <ul className={`sideNav__list ${props.show ? "open" : ""}`}>
          <li className="sideNav__item">
            <Link className="sideNav__link" to="/">
              pocetna
            </Link>
          </li>

          <li className="sideNav__item">
            <Link className="sideNav__link" to="/about">
              o nama
            </Link>
          </li>

          <li className="sideNav__item">
            <Link className="sideNav__btn" to="/form">
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
