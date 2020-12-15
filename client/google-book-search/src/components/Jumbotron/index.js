import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{  clear: "both", textAlign: "center" }}
      className="jumbotron"
    >
      <h1>Google Books Search</h1>
      <h3>Read Your Favorite Books</h3>
    </div>
  );
}

export default Jumbotron;