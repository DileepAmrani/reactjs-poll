import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, NotFound, Signup, Login, NewPoll } from "./Containers";

const App = () => {
  return (
    <section className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={NewPoll} />
          <Route path="/register" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </section>
  );
};

export default App;