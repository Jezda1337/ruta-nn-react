import "../Scss/Components/Footer.scss";
const Footer = (props) => {
  return (
    <>
      <footer className="footer" style={{ color: props.color }}>
        <span className="footer__text">Copyright &#169; 2021, Ruta NN.</span>
      </footer>
    </>
  );
};

export default Footer;
