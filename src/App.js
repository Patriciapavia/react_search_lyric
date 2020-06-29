import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
