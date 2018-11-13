import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Billing from "./components/Billing";
import GamesList from "./components/GamesList";
import Setting from "./components/Setting";
import Invoices from "./components/Invoices";
import Game from "./components/Game";
import { Route, withRouter } from "react-router-dom";
import Round from "./components/Round";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={LandingPage} />
                <Route path="/billing" component={Billing} />
                <Route path="/gameslist" component={GamesList} />
                <Route path="/setting" component={Setting} />
                <Route path="/invoices" component={Invoices} />
                <Route path="/game/:id" component={Game} />
                <Route path="/round/:id" component={Round} />
            </div>
        );
    }
}

export default withRouter(App);
