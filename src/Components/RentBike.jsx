import bg from "../Assets/images/rent.webp";
const RentBike = () => {
  return (
    <>
      <section className="rent" style={{ height: "100%", maxHeight: "100%" }}>
        <div
          style={{ maxWidth: "800px", marginInline: "auto", marginTop: "20px" }}
        >
          <img src={bg} alt="" />
        </div>
      </section>
    </>
  );
};

export default RentBike;
