import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import { Provider } from "./Context";

import "./App.css";

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
