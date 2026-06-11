import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import  { App } from "./App.jsx";
import { episodeList } from "./data.js"
// StrictMode helps you find common bugs in your components early during development.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

