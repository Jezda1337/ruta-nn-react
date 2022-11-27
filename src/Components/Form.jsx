import axios from "axios";
import { useState } from "react";
import InputField from "./InputField";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Form = () => {
	const [user, setUser] = useState("");
	const [userPhone, setUserPhone] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userCity, setUserCity] = useState("");
	const [userKTC, setUserKTC] = useState("");
	const [userVehicle, setUserVehicle] = useState("");
	const [userJobType, setUserJobType] = useState("");
	const [userExp, setUserExp] = useState("");

	const MySwal = withReactContent(Swal);

	const handleSubmit = (e) => {
		console.log("test");
		e.preventDefault();
		const userData = {
			name: user,
			phone: userPhone,
			email: userEmail,
			city: userCity,
			KTC: userKTC,
			jobType: userJobType,
			vehicle: userVehicle,
			exp: userExp,
		};
		axios.post("/form", userData);

		MySwal.fire({
			icon: "success",
			title: "Hvala vam na prijavi, uskoro cemo vam se javiti.",
			showConfirmButton: false,
			timer: 1500,
		});
	};
	return (
		<>
			<section className="form">
				<div className="wrapper">
					<section className="form__body">
						<h2 className="form__title">
							Prijavi se vec danas i postani deo <span>tima</span>.
						</h2>

						<form onSubmit={handleSubmit} className="form__fields">
							<p style={{ textAlign: "center", marginBottom: "25px" }}>
								*Da biste poslali formu, molimo vas popunite sva ponudjena
								polja.*
							</p>
							<InputField
								change={(e) => setUser(e.target.value)}
								name="full_name"
								type="text"
								placeholder="Puno ime i prezime"
							/>
							<InputField
								change={(e) => setUserEmail(e.target.value)}
								name="email"
								type="email"
								placeholder="Email adresa"
								patern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
							/>
							<InputField
								change={(e) => setUserPhone(e.target.value)}
								name="phone"
								type="tel"
								placeholder="Broj mobilnog telefona"
							/>
							<InputField
								change={(e) => setUserCity(e.target.value)}
								name="city"
								tpye="text"
								placeholder="U kom gradu zelite da radite"
								list="city"
							/>
							<datalist id="city">
								<option value="Beograd">Beograd</option>
								<option value="Novi Sad" />
								<option value="Nis" />
								<option value="Subotica" />
								<option value="Pancevo" />
							</datalist>

							<InputField
								change={(e) => setUserKTC(e.target.value)}
								name="knowledgeOfTheCity"
								tpye="text"
								placeholder="Koliko dobro poznajete grad"
								list="knowledgeOfTheCity"
							/>
							<datalist id="knowledgeOfTheCity">
								<option value="Vrlo dobro" />
								<option value="Dobro" />
								<option value="Solidno" />
							</datalist>

							<InputField
								change={(e) => setUserVehicle(e.target.value)}
								name="vehicleType"
								type="text"
								placeholder="Prevozno sredstvo"
								list="vehicleType"
							/>
							<datalist id="vehicleType">
								<option value="Rent a bike" />
								<option value="Bicikl" />
								<option value="Skuter" />
								<option value="Auto" />
							</datalist>

							<InputField
								change={(e) => setUserJobType(e.target.value)}
								name="jobType"
								type="text"
								placeholder="Full/Part time job"
								list="jobType"
							/>
							<datalist id="jobType">
								<option value="Full time job" />
								<option value="Part time job" />
							</datalist>

							<InputField
								change={(e) => setUserExp(e.target.value)}
								name="exp"
								type="text"
								placeholder="Prethodno iskustvo"
							/>

							<button className="btn form__btn" type="submit">
								Konkurisi
							</button>
						</form>
					</section>
				</div>
			</section>
		</>
	);
};

export default Form;
