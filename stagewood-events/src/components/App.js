import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import EventsPage from "./EventsPage";


const App = () => {
  return (
    <Switch>      
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/eventspage" component={EventsPage} />
    </Switch>
  );
}

export default App;