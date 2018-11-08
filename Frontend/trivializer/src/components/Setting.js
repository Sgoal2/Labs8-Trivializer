import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div className="setting-page">
      <div className="top-content">
        <div className="top-leftside">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Setting
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
        <h1 className="main-middle">Setting Page</h1>
      </div>
    </div>
  );
};

export default Setting;
