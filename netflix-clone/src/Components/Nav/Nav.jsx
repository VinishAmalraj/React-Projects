import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav-head">
      <div className="logoname">
        <a href="/">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
            alt=""
          />
        </a>
      </div>
      <div className="loginbox">
        <a href="/Login">
          <button id="Joinbtn">JOIN NOW</button>
          <button id="sigin-btn">SIGN IN</button>
        </a>
      </div>
    </div>
  );
}

export default Nav;
