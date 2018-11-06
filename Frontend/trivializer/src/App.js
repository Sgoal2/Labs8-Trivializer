import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Billing from "./components/Billing";
import GamesList from "./components/GamesList";
import Setting from "./components/Setting";
import Invoices from "./components/Invoices";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/billing" component={Billing} />
        <Route path="/gameslist" component={GamesList} />
        <Route path="/setting" component={Setting} />
        <Route path="/invoices" component={Invoices} />
      </div>
    );
  }
}

export default App;
