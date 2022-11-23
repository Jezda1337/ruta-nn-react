import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Assets/Asset1.svg";
import SocialMedia from "./SocialMedia";

const Header = ({ handleToggle, show, setOpen }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    (function handleResize() {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    })();
  });

  return (
    <>
      <header className="header">
        <section className="header__contact">
          <div className="wrapper">
            <section className="header__contact-body">
              <figure className="header__contact-info">
                <FaPhoneAlt fill="#0a1931" size={24} />
                <a href="tel:+381695230188">
                  <span className="header__contact-text">+381 695 230 188</span>
                </a>
              </figure>

              <figure className="header__contact-info">
                <FaEnvelope fill="#0a1931" size={24} />
                <a href="mailto:rutanndelivery@gmail.com" rel="noreferrer">
                  <span className="header__contact-text">
                    rutanndelivery@gmail.com
                  </span>
                </a>
              </figure>

              {width >= 768 ? <SocialMedia /> : ""}
            </section>
          </div>
        </section>
        <nav className="nav">
          <div className="wrapper">
            <section className="nav__body">
              <div className="nav__logo">
                <Link
                  onClick={() => setOpen(false)}
                  className="nav__logo-link"
                  to="/"
                >
                  <img src={Logo} width="48" height="48" alt="brend logo" />
                </Link>
              </div>

              <button
                onClick={handleToggle}
                aria-label="open/close mobile menu"
                className="nav__toggle-btn"
              >
                <svg
                  className={`nav__toggle-btn hamRotate nav__toggle-btn--anim ${
                    show ? "active" : null
                  }`}
                  viewBox="0 0 100 100"
                  width="50"
                >
                  <path
                    className="line top"
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                  />
                  <path className="line middle" d="m 30,50 h 40" />
                  <path
                    className="line bottom"
                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                  />
                </svg>
              </button>

              <ul className="nav__list">
                <li className="nav__item">
                  <Link className="nav__link" to="/">
                    pocetna
                  </Link>
                </li>

                <li className="nav__item">
                  <Link className="nav__link" to="/rent">
                    rent a bike
                  </Link>
                </li>

                <li className="nav__item">
                  <Link className="nav__link nav__link--btn" to="/form">
                    konkurisi
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
