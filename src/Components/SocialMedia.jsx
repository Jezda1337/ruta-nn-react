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
						href="https://invite.viber.com/?g2=AQBO1D5sWXXiHE3c7ujmoy3DFcHz1WjN7g6hRLx0Zn0va2LNSgNtDP8ZD3%2BGNWHk&fbclid=IwAR0xIV3Gp1GQa1tRDgK2f-NUf1T-81XL-4N97jCU6Jwf5A8iqcrYXC8Jc2w"
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
