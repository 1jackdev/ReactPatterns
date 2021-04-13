import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import Header from "./Header";
import ColorForm from "./ColorForm";
const Routes = ({ initialColors = Routes.defaultProps.colors }) => {
  const [colors, updateColors] = useState(initialColors);

  function handleAdd(newColorObj) {
    updateColors((prevColors) => {
      const newColors = prevColors;
      newColors.push(newColorObj);
      return newColors;
    });
  }
  return (
    <Switch>
      <Route exact path="/colors">
        <div>
          <Header />
          <ColorList colors={colors} />
        </div>
      </Route>
      <Route exact path="/colors/new">
        <ColorForm addColor={handleAdd} />
      </Route>
      <Route exact path="/colors/:color">
        <Color colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
};

Routes.defaultProps = {
  colors: [
    {
      name: "blue",
      hex: "#0000ff",
    },
    {
      name: "red",
      hex: "#ff0000",
    },
    {
      name: "green",
      hex: "#00ff00",
    },
  ],
};

export default Routes;
