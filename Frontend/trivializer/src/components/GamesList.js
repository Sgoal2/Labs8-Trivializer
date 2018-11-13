import React, { Component } from "react";
import Games from "./Games";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class GamesList extends Component {
    // temp state, move to redux later
    constructor() {
        super();
        this.state = {
            gameId: 0,
            gamesList: [
                // {
                //     id: "1",
                //     title: "Game 1",
                //     description: "Game 1",
                //     image: "",
                //     created: "",
                //     played: "",
                //     rounds: [{ questions: [] }]
                // },
                // {
                //     id: "2",
                //     title: "Game 2",
                //     description: "Game 2",
                //     image: "",
                //     created: "",
                //     played: ""
                // }
            ]
        };
    }

    componentDidMount() {}

    handleGameId = () => {
        if (this.state.gamesList.length > 0) {
            this.setState({ gameId: this.state.gameId + 1 });
        }
    };

    handleSaveGame = e => {};

    render() {
        return (
            <div className="gameslist-page">
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
                    {/* Ternary here should go: if [games] display <Games /> component, if NOT, display the add new game sign*/}
                    {this.state.gamesList.length < 1 ? (
                        <div>
                            <h3 className="main-middle">Add New Game</h3>
                            <Link to={`/game/${this.state.gameId}`}>+</Link>
                        </div>
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
                    {this.state.gamesList.length > 1 ? (
                        <div>
                            <div>New Game</div>
                            <button>+</button>
                        </div>
                    ) : null}
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
