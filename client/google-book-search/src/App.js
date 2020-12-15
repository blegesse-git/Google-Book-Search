import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import SearchBooks from "./pages/SearchBooks";
// import NoMatch from "./pages/NoMatch";
// import Navbar from "./components/Navbar";

import "./App.css"

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/search" component={SearchBooks} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path= " /noMatch" component={NoMatch} />  */}
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
