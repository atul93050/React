import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

//props are like arguments or properties

const Chai = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.cost),
  ]);
};
const App = () => {
  return React.createElement(
    "div",
    { style: { fontFamily: "sans-serif", padding: "20px" } },
    [
      React.createElement(
        "h1",
        { style: { color: "#8B4513" } },
        "☕ Chai Variations by Atul"
      ),
      React.createElement(
        "p",
        { style: { fontStyle: "italic" } },
        "Explore the flavorful world of Indian tea!"
      ),
      React.createElement("hr"),
      React.createElement(Chai, { name: " Masala Chai", cost: "$5" }),
      React.createElement(Chai, { name: "Adrak Chai", cost: "$6" }),
      React.createElement(Chai, { name: "Elaichi Chai", cost: "$7" }),
      React.createElement(Chai, { name: "Tulsi Chai", cost: "$8" }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
