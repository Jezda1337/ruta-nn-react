import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Scss/index.scss";

import Loader from "./Components/Loader";
const Header = lazy(() => import("./Components/Header"));
const Home = lazy(() => import("./Components/Home"));
const SideNavigation = lazy(() => import("./Components/SideNavigation"));
const Form = lazy(() => import("./Components/Form"));
const Footer = lazy(() => import("./Components/Footer"));
const RentBike = lazy(() => import("./Components/RentBike"));

const App = () => {
  const [isOpen, setOpen] = useState(false);

  function handleSideNav() {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Header
            setOpen={setOpen}
            show={isOpen}
            handleToggle={handleSideNav}
          />
          <SideNavigation
            setOpen={setOpen}
            show={isOpen}
            handleOpen={handleSideNav}
          />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/form" element={<Form />} />
              <Route exact path="/rent" element={<RentBike />} />
            </Routes>
          </main>
        </Router>
        <Footer color="white" />
      </Suspense>
    </>
  );
};

export default App;
