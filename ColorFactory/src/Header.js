import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h3>Welcome to the Color Factory</h3>
      <h2>
        <Link className="new-color-link" to="/colors/new">
          Add a Color
        </Link>
      </h2>
    </header>
  );
};

export default Header;
