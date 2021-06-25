import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/our-services">
          <Services />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
