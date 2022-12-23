import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpert } from "./GifExpert";
import "./bootswatch.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container-fluid">
      <GifExpert />
    </div>
  </React.StrictMode>
);
