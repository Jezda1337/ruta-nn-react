import { FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";
// import "../Scss/Components/SocialMedia.scss";

const SocialMedia = () => {
  return (
    <>
      <ul className="socialMedia">
        <li className="socialMedia__item">
          <a
            href="https://www.instagram.com/rutanndelivery/"
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
        <li className="socialMedia__item">
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Finvite.viber.com%2F%3Fg2%3DAQBO1D5sWXXiHE3c7ujmoy3DFcHz1WjN7g6hRLx0Zn0va2LNSgNtDP8ZD3%252BGNWHk%26fbclid%3DIwAR0xIV3Gp1GQa1tRDgK2f-NUf1T-81XL-4N97jCU6Jwf5A8iqcrYXC8Jc2w&h=AT0F1O29IVyo9ldjjFvDE8hi_mxL8uZVxPKiGoRXdzkGfBskL0IoizNe4KHOkcduMwhphyp31uF1aVSKRSFs8HA402jhBwxq44HpUh2Gs28-DP6GLYN1uIUl9bUJs5jvXKt1PpjOnFQ"
            className="socialMedia__item--group"
            rel="noopener noreferrer"
            aria-label="viber icon"
            target="_blank"
          >
            <p>Grupa</p>
            <FaViber fill="#fff" size={24} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
