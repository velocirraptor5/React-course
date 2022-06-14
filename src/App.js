import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1> Adopt Me!</h1>
      <Pet name="luna" animal="dog" breed="havanese" />
      <Pet name="pepper" animal="bird" breed="cockatiel" />
      <Pet name="doink" animal="cat" breed="mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
