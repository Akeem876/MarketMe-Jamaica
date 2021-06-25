import React from "react";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
