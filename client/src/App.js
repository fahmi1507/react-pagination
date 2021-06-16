import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Graphic from "./views/Graphic";
import Map from "./views/Map";
import Table from "./views/Table";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Table />
        </Route>
        <Route path="/graphic">
          <Graphic />
        </Route>
        <Route path="/map">
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
