import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import EventResults from "./EventResults";
import History from "./History";


const App = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/search/id" component={EventResults} />
      </Switch>
    </Router>
  );
}

export default App;