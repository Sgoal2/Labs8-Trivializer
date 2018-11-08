import React, { Component } from "react";
import Games from "./Games";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class GamesList extends Component {
    // temp state, move to redux later
    constructor() {
        super();
        this.state = {
            gamesList: [
                { name: "Game 1", description: "Game 1" }
                // { name: "Game 2", description: "Game 2" }
            ]
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div className="gameslist-page">
                <div className="top-content">
                    <div className="top-leftside">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li
                                    class="breadcrumb-item active"
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
                    {/* Ternary here should go: if [games] display <Games /> component, if NOT, display the add new game sign*/}
                    {this.state.gamesList.length < 1 ? (
                        <h3 className="main-middle">Add New Game</h3>
                    ) : (
                        this.state.gamesList.map((game, i) => (
                            <Link to={`/game/${game["id"]}`}>
                                <GameDetails
                                    key={game["id"]}
                                    index={i}
                                    game={game}
                                />
                            </Link>
                        ))
                    )}
                </div>
            </div>
        );
    }
}

function GameDetails({ game }) {
    return (
        <div>
            <Games game={game} />
        </div>
    );
}

export default GamesList;
