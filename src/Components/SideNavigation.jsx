import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import cenovnik from "../Assets/files/cenovnik.pdf";
import opsti_uslovi from "../Assets/files/opsti_uslovi.pdf";

const SideNavigation = ({ show, handleOpen }) => {
  return (
    <>
      <nav
        className={`sideNav ${show ? "openNav" : ""}`}
        style={{ minHeight: show ? "100vh" : "" }}
      >
        <ul className={`sideNav__list ${show ? "open" : ""}`}>
          <li className="sideNav__item">
            <Link
              onClick={handleOpen}
              className="sideNav__link sideNav__link--green"
              to="/"
            >
              pocetna
            </Link>
          </li>

          <li className="sideNav__item">
            <Link
              onClick={handleOpen}
              className="sideNav__link sideNav__link--blue"
              to="/rent"
            >
              rentiranje vozila
            </Link>
          </li>

          <li className="sideNav__item">
            <Link onClick={handleOpen} className="sideNav__btn" to="/form">
              konkurisi
            </Link>
          </li>

          <li className="sideNav__papersButtons">
            <a className="sideNav__paperButton" href={opsti_uslovi}>
              Opsti uslovi rada
            </a>
            <a className="sideNav__paperButton" href={cenovnik}>
              Cenovnik
            </a>
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
