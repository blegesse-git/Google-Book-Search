import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
      
      <a className="navbar-brand m-2" href="/" id="search">
        Search
      </a>
      <a className="navbar-brand m-2" href="/save" id="saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;