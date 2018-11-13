import React, { Component } from "react";

class Rounds extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>{this.props.round.title}</div>
                <input type="number" min="1" />
                <select>
                    <option value="1">Option 1</option>
                </select>
                <select>
                    <option value="2">Option 2</option>
                </select>
                <select>
                    <option value="3">Option 3</option>
                </select>
                <button>Delete</button>
            </div>
        );
    }
}

export default Rounds;
