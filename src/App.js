import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import SideNavigation from "./Components/SideNavigation";
import Footer from "./Components/Footer";

import { useState } from "react";

import "./Scss/App.scss";

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
      <Router>
        <Header click={handleSideNav} />
        <SideNavigation show={isOpen} />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer color="white" />
    </>
  );
};

export default App;
