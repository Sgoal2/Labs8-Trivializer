import React, { Component } from "react";

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
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
