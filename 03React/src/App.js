import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const App = () => {
  return React.createElement(
    "div",
    { style: { fontFamily: "sans-serif", padding: "20px" } },
    [
      React.createElement("h1", { style: { color: "#8B4513" } }, "☕ Chai Variations by Atul"),
      React.createElement("p", { style: { fontStyle: "italic" } }, "Explore the flavorful world of Indian tea!"),
      React.createElement("hr"),
      React.createElement(ChaiMenu),
    ]
  );
};

const ChaiMenu = () => {
  return React.createElement("div", { style: { marginTop: "20px" } }, [
    React.createElement(ChaiItem, {
      name: "Masala Chai",
      description: "A bold blend of black tea with spices like cardamom, cinnamon, ginger & cloves.",
    }),
    React.createElement(ChaiItem, {
      name: "Adrak Chai",
      description: "Ginger-infused chai, perfect for cold mornings and sore throats.",
    }),
    React.createElement(ChaiItem, {
      name: "Elaichi Chai",
      description: "Cardamom-flavored chai with a sweet, aromatic finish.",
    }),
    React.createElement(ChaiItem, {
      name: "Tulsi Chai",
      description: "Herbal chai made with holy basil, known for its calming properties.",
    }),
  ]);
};

const ChaiItem = ({ name, description }) => {
  return React.createElement("div", { style: { marginBottom: "16px" } }, [
    React.createElement("h2", { style: { color: "#6B4F4F" } }, `🌿 ${name}`),
    React.createElement("p", {}, description),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
