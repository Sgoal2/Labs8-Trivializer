import React, { Component } from "react";
import Rounds from "./Rounds";
import { Link } from "react-router-dom";

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                <div>{this.props.game.title}</div>
                <div>{this.props.game.description}</div>
                <div>Add game image</div>
                <div>Created: {this.props.game.created}</div>
                <div>Played: {this.props.game.played}</div>
            </div>
        );
    }
}

export default Games;
