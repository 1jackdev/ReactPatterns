import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({colors}) => {
  return (
    <div className="color-list">
      <h3>Please Select a color</h3>
      <ul>
        {colors.map((color) => {
          return (
            <li key={color.name}>
              <Link
                style={{ color: color.hex }}
                className="color-link"
                to={`/colors/${color.name.toLowerCase()}`}
              >
                {color.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorList;
