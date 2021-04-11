import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = ({ dogs }) => {
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
      {dogs.map((dog) => {
        return (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
