import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./ColorForm.css";
const ColorForm = ({ addColor }) => {
  const [form, updateForm] = useState({ name: "", hex: "#ffffff" });
  const history = useHistory();

  function handleChange(e) {
    updateForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ name: form.name, hex: form.hex });
    history.push("/colors");
  }

  const { hex, name } = form;

  return (
    <div className="color-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" value={name} onChange={handleChange}></input>
        <label htmlFor="hex">Color:</label>
        <input
          type="color"
          name="hex"
          value={hex}
          onChange={handleChange}
        ></input>
        <button>Add Color</button>
      </form>
      <Link to="/colors">GO BACK</Link>
    </div>
  );
};

export default ColorForm;
