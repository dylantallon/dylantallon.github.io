import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

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
        <SocialIcon style={{ height: 40, width: 40, marginRight: 10 }} url="https://www.linkedin.com/in/dylan-tallon/" fgColor="#ffffff" />
        <SocialIcon style={{ height: 40, width: 40, marginRight: 10 }} url="https://github.com/dylant313" fgColor="#ffffff" />
      </div>
    </header>
  );
};

export default Header;
