import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import useToken from "./components/useToken";
import Graphic from "./views/Graphic";
import Login from "./views/Login";
import Map from "./views/Map";
import Table from "./views/Table";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

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
