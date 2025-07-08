import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // App() // we can even do like this as App is just a function
  <App />
  // Or we can render it via JsX - <App />
);
