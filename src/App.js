import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, Suspense, lazy } from "react";

import './Scss/index.scss';

const Header = lazy(() => import("./Components/Header"));
const Home = lazy(() => import("./Components/Home"));
const SideNavigation = lazy(() => import("./Components/SideNavigation"));
const About = lazy(() => import("./Components/About"));
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
    setOpen(!isOpen);
  }

  return (
    <>
      <Suspense fallback="Loading...">
        <Router>
          <Header show={isOpen} click={handleSideNav} />
          <SideNavigation show={isOpen} />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/form">
                <Form />
              </Route>
              <Route exact path="/rent">
                <RentBike />
              </Route>
            </Switch>
          </main>
        </Router>
        <Footer color="white" />
      </Suspense>
    </>
  );
};

export default App;
