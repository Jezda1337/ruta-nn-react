import { Link } from "react-router-dom";
//custom hook for outside click
// import { useClickOutside } from "../hooks/useClickOutside/index";
import { SocialMedia } from "../Components";

const SideNavigation = ({ show, handleOpen, setOpen }) => {
  //invoking custom hook
  // let domNode = useClickOutside(() => (show ? handleOpen() : setOpen(false)));

  return (
    <>
      <nav className={`sideNav ${show ? "openNav" : ""}`}>
        <ul className={`sideNav__list ${show ? "open" : ""}`}>
          <li className="sideNav__item">
            <Link onClick={handleOpen} className="sideNav__link" to="/">
              pocetna
            </Link>
          </li>

          <li className="sideNav__item">
            <Link onClick={handleOpen} className="sideNav__link" to="/about">
              o nama
            </Link>
          </li>

          <li className="sideNav__item">
            <Link onClick={handleOpen} className="sideNav__link" to="/rent">
              rent a bike
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
