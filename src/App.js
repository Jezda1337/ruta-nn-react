import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import SideNavigation from "./Components/SideNavigation";
import { useState } from "react";
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
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
