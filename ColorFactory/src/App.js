import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
}


export default App;
