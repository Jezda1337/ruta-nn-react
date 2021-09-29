import Slider from "./Slider";
// import "../Scss/Components/RentBike.scss";

const RentBike = () => {
  return (
    <>
      <section className="rent">
        <Slider />
        <div className="wrapper">
          <section className="rent__body">
            <h2 className="rent__title">Rent a bike</h2>
            <p className="rent__text">
              Ukoliko nemate svoje vozilo za rad, mozete rentirati elektricni
              bicikl kod nas. Elektricni bicikl kao vozilo za rad u dostavi vam
              donosi dosta prednosti. Za vise informacija o rentiranju bicikli,
              mozete nas slobodno kontaktirati putem poziva.
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default RentBike;
