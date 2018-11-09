import React, { Component } from "react";
import Questions from "./Questions";

class Rounds extends Component {
    render() {
        return (
            <div>
                Rounds
                {/* <Questions /> */}
                <h3>{this.props.round.name}</h3>
            </div>
        );
    }
}

export default Rounds;
