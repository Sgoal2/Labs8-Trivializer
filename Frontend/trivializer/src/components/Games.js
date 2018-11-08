import React, { Component } from "react";
import Rounds from "./Rounds";
import { Link } from "react-router-dom";

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: "",
            gameTitle: "",
            gameDate: "",
            roundsList: [{ id: "1", name: "Round 1" }]
        };
    }
    render() {
        return (
            <div>
                {/* <div>
                    <div>Logo</div>
                    <input placeholder="Game Title" />
                    <input type="date" />
                    <button>Print Answer Sheets</button>
                    <button>Print Answer Key</button>
                </div> */}
                {/* refactor to map Rounds and render */}
                {/* <Rounds /> */}
                <div>{this.props.game.name}</div>
                <div>{this.props.game.description}</div>
                <div>Created: date</div>
                <div>Played: date</div>
            </div>
        );
    }
}

export default Games;
