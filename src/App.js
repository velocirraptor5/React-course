import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "havanese",
    }),
    React.createElement(Pet, {
      name: "pepper",
      animal: "bird",
      breed: "cockatiel",
    }),
    React.createElement(Pet, {
      name: "doink",
      animal: "cat",
      breed: "mix",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
