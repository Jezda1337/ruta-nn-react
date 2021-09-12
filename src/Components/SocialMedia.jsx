import { FaInstagram, FaWhatsapp, FaViber } from "react-icons/fa";
import "../Scss/Components/SocialMedia.scss";

const SocialMedia = () => {
  return (
    <>
      <ul className="socialMedia">
        <li className="socialMedia__item">
          <a href="https://instagram.com/">
            <FaInstagram fill="#0a1931" size={24} />
          </a>
        </li>
        <li className="socialMedia__item">
          <a href="https://instagram.com/">
            <FaWhatsapp fill="#0a1931" size={24} />
          </a>
        </li>
        <li className="socialMedia__item">
          <a href="https://instagram.com/">
            <FaViber fill="#0a1931" size={24} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
