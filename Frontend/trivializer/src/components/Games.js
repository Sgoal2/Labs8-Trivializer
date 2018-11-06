import React, { Component } from "react";
import Rounds from "./Rounds";

class Games extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>Logo</div>
                    <div>Game Title</div>
                    <div>Date/Calendar</div>
                    <div>Print Answer Sheets</div>
                    <div>Print Answer Key</div>
                </div>
                {/* refactor to map Rounds and render */}
                <Rounds />
            </div>
        );
    }
}

export default Games;
