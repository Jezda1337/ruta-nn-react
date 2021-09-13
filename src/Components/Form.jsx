import "../Scss/Components/Form.scss";
import InputField from "./InputField";

const Form = () => {
  return (
    <>
      <section className="form">
        <div className="wrapper">
          <section className="form__body">
            <h2 className="form__title">
              Prijavi se vec danas i postani deo <span>tima</span>.
            </h2>

            <form className="form__fields">
              <InputField type="text" placeholder="Puno ime i prezime" />
              <InputField type="email" placeholder="Email adresa" />
              <InputField type="tel" placeholder="Broj mobilnog telefona" />
              <InputField
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
                type="text"
                placeholder="Full/Part time job"
                list="jobType"
              />
              <datalist id="jobType">
                <option value="Full time job" />
                <option value="Part time job" />
              </datalist>

              <InputField type="text" placeholder="Prethodno iskustvo" />

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
