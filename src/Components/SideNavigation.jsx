import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const SideNavigation = ({ show, handleOpen }) => {
  return (
    <>
      <nav
        className={`sideNav ${show ? "openNav" : ""}`}
        style={{ minHeight: show ? "100vh" : "" }}
      >
        <ul className={`sideNav__list ${show ? "open" : ""}`}>
          <li className="sideNav__item">
            <Link onClick={handleOpen} className="sideNav__link" to="/">
              pocetna
            </Link>
          </li>

          <li className="sideNav__item">
            <Link onClick={handleOpen} className="sideNav__link" to="/rent">
              rentiranje vozila
            </Link>
          </li>

          <li className="sideNav__item">
            <Link onClick={handleOpen} className="sideNav__btn" to="/form">
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
