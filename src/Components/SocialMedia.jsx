import { FaInstagram, FaWhatsapp, FaViber } from "react-icons/fa";
// import "../Scss/Components/SocialMedia.scss";

const SocialMedia = () => {
  return (
    <>
      <ul className="socialMedia">
        <li className="socialMedia__item">
          <a
            href="https://www.instagram.com/rutanndeliveryservice/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram icon"
          >
            <FaInstagram fill="#0a1931" size={24} />
          </a>
        </li>
        <li className="socialMedia__item">
          <a
            href="https://wa.me/381695230188"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsu icon"
          >
            <FaWhatsapp fill="#0a1931" size={24} />
          </a>
        </li>
        <li className="socialMedia__item">
          <a
            href="viber://chat?number=+381695230188"
            rel="noopener noreferrer"
            aria-label="viber icon"
          >
            <FaViber fill="#0a1931" size={24} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
