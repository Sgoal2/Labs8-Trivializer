import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Billing from "./components/Billing";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/billing" component={Billing} />
      </div>
    );
  }
}

export default App;
