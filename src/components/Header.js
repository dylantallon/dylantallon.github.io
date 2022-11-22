import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <Link className="linkL" to="/">
          Dylan Tallon
        </Link>
      </div>

      <div className="right-section">
        <Link className="linkR" to="/">
          Home
        </Link>
        <Link className="linkR" to="/coursework">
          Coursework
        </Link>
        <Link className="linkR" to="/research">
          Research
        </Link>
        <Link className="linkR" to="/projects">
          Projects
        </Link>
      </div>
    </header>
  );
};

export default Header;
