import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/home/index.jsx';
import My from '../pages/my/index.jsx';
import ReduxDemo from '../pages/reduxDemo/index.jsx';

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Redirect path="/" exact to="/home" />
        <Route path="/home" exact component={Home} />
        <Route path="/my" exact component={My} />
        <Route path="/reduxDemo" exact component={ReduxDemo} />
      </Switch>
    </HashRouter>
  );
}

export default Router