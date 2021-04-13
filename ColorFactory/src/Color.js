import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import "./Color.css";
const Color = ({ colors }) => {
  const { color } = useParams();
  const colorObj = colors.filter((c) => c.name === color);
  if (!colorObj[0]) return <Redirect to="/colors" />;
  return (
    <div className="color-page" style={{ backgroundColor: colorObj[0].hex }}>
      <h1>This is what {color} looks like!</h1>
      <Link to="/colors">GO BACK</Link>
    </div>
  );
};

export default Color;
