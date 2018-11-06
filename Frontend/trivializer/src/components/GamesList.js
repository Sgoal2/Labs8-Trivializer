import React, { Component } from "react";
import Games from "./Games";

class GamesList extends Component {
    render() {
        return (
            <div>
                {/* refactor to map Games and render */}
                <div>Game Title</div>
                <div>Game Description</div>
                <div>Created: Date</div>
                <div>Played: Date</div>
                <Games />
            </div>
        );
    }
}

export default GamesList;
