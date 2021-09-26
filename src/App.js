import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  SideNavigation,
  Header,
  Home,
  About,
  Form,
  RentBike,
  Footer,
} from "./Components";

import { useState, Suspense } from "react";

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
        <Header show={isOpen} click={handleSideNav} />
        <SideNavigation show={isOpen} />
        <main>
          <Suspense fallback="Loading...">
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
          </Suspense>
        </main>
      </Router>
      <Footer color="white" />
    </>
  );
};

export default App;
