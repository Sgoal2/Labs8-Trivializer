import React, { Component } from "react";
import Games from "./Games";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class GamesList extends Component {
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
                <li class="breadcrumb-item active" aria-current="page">
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
          <h3 className="main-middle">Add New Game</h3>
          {/* Ternary here should go: if [games] display <Games /> component, if NOT, display the add new game sign*/}
        </div>
      </div>
    );
  }
}

export default GamesList;
