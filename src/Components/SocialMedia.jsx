import { FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";

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
            aria-label="Whatsapp icon"
          >
            <FaWhatsapp fill="#0a1931" size={24} />
          </a>
        </li>
        {/* <li className="socialMedia__item"> */}
        {/* 	<a */}
        {/* 		href="viber://chat?number=+381695230188" */}
        {/* 		rel="noopener noreferrer" */}
        {/* 		aria-label="viber icon" */}
        {/* 	> */}
        {/* 		<FaViber fill="#0a1931" size={24} /> */}
        {/* 	</a> */}
        {/* </li> */}
        <li className="socialMedia__item">
          <a
            href="https://invite.viber.com/?g2=AQAsOf7KxjMafUrgD4K4q%2BeKkr4n98Nu6UIZN1h%2FiEHjyp1gSp6k%2BU%2FfMA46c7RP&lang=en"
            className="socialMedia__item--group"
            aria-label="viber icon"
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
