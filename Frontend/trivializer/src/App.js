import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { connect } from "react-redux";
import { fetchReq } from "./actions";

class App extends Component {
    // test request
    componentDidMount() {
        this.props.fetchReq();
    }

    render() {
        return (
            <div className="App">
                <LandingPage />
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

export default connect(
    mapStateToProps,
    { fetchReq }
)(App);
