import React, { Component } from "react";
import Games from "./Games";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class GamesList extends Component {
  render() {
    return (
      <div className="gameslist-page">
        <div className="top-content">
          <div className="left-side">
            <Link className="right-side" to="/">
              Sign Out
            </Link>
          </div>
        </div>

        <div className="main-content">
          <Navbar />
          {/* Ternary here should go: if [games] display <Games> component, if NOT, display the add new game sign*/}
          <Games />
        </div>
      </div>
    );
  }
}

export default GamesList;
