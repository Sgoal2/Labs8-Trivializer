import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Billing from "./components/Billing";
import GamesList from "./components/GamesList";
import Setting from "./components/Setting";
import Invoices from "./components/Invoices";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchReq } from "./actions";

class App extends Component {
    componentDidMount() {
        this.props.fetchReq();
    }

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

const mapStateToProps = state => {
    return {
        questions: state.questions,
        fetched: state.fetched
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { fetchReq }
    )(App)
);
