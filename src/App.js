import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocktiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
