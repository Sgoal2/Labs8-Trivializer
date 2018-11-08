import React, { Component } from "react";
import Rounds from "./Rounds";

class Games extends Component {
    constructor() {
        super();
        this.state = {
            logo: "",
            gameTitle: "",
            gameDate: ""
        };
    }
    render() {
        return (
            <div>
                <div>
                    <div>Logo</div>
                    <input placeholder="Game Title" />
                    <input type="date" />
                    <button>Print Answer Sheets</button>
                    <button>Print Answer Key</button>
                </div>
                {/* refactor to map Rounds and render */}
                <Rounds />
            </div>
        );
    }
}

export default Games;
