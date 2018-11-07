import React, { Component } from "react";
import Games from "./Games";
import Navbar from "./Navbar";

class GamesList extends Component {
  render() {
    return (
      <div className="gameslist-page">
        {/* refactor to map Games and render */}
        <Navbar />
        <div className="main-content">
          <div>Game Title</div>
          <div>Game Description</div>
          <div>Created: Date</div>
          <div>Played: Date</div>
          <Games />
        </div>
      </div>
    );
  }
}

export default GamesList;
