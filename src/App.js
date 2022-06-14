const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
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
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
