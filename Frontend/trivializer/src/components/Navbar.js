import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul class="navbar nav flex-column">
      <div class="inner-nav">
        <li class="nav-item">
          <Link to="/gameslist" class="nav-link active">
            Games
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/invoices" class="nav-link">
            Invoices
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/billing" class="nav-link">
            Billing
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/setting" class="nav-link">
            Setting
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default NavBar;
