import React from "react";
import TopBar from "./TopBar";
import Home from "../routerComponents/Home";
import About from "../routerComponents/About";
import Tours from "../routerComponents/Tours";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/About" exact component={About}/>
            <Route path="/Tours" component={Tours}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
