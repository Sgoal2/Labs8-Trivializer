import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameTitle: "",
            gameDescription: "",
            gameDate: ""
        };
    }

    handleTitle = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleDescription = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleDate = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="game-page">
                <div className="top-content">
                    <div className="top-leftside">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Games
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <Link className="top-rightside" to="/">
                        Sign Out
                    </Link>
                </div>

                <div className="main-content">
                    <Navbar />
                    <div>
                        <div>Logo</div>
                        <input
                            name="gameTitle"
                            placeholder="Game Title"
                            value={this.state.gameTitle}
                            onChange={this.handleTitle}
                        />
                        <input
                            name="gameDescription"
                            placeholder="Game Description"
                            value={this.state.gameDescription}
                            onChange={this.handleDescription}
                        />
                        <input
                            type="date"
                            name="gameDate"
                            placeholder="mm/dd/yyyy"
                            value={this.state.gameDate}
                            onChange={this.handleDate}
                        />
                        <button>Print Answer Sheets</button>
                        <button>Print Answer Key</button>
                        <button>Save Game</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
