import React from "react";
import "./Header.css";
import { FaPlay } from "react-icons/fa";
function Header() {
  return (
    <div className="Head">
      <div className="head-content">
        <div className="title">
          <h1>Movies</h1>
        </div>
        <div className="play-btn">
          <button id="Play-btn">
            <FaPlay fontSize="15px" /> Play
          </button>
          <button id="List-btn">My List</button>
        </div>
        <div className="details">
          <p>
          Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
