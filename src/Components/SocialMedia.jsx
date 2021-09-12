import { FiInstagram, FiFacebook } from "react-icons/fi";
import "../Scss/Components/SocialMedia.scss";

const SocialMedia = () => {
  return (
    <>
      <ul className="socialMedia">
        <li className="socialMedia__item">
          <FiInstagram size={24} />
        </li>
        <li className="socialMedia__item">
          <FiFacebook size={24} />
        </li>
        <li className="socialMedia__item">
          <FiInstagram size={24} />
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
