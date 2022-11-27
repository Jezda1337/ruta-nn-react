import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Scss/index.scss";

import RentBike from "./Components/RentBike";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Loader from "./Components/Loader";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const SideNavigation = lazy(() => import("./Components/SideNavigation"));

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
          <SideNavigation show={isOpen} handleOpen={handleSideNav} />
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
