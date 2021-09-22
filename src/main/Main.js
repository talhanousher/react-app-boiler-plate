import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/Contact';

export default function Auth() {
  return (
    <div>
      <Switch>
        <Route path="/main/Dashboard" component={Dashboard} />
        <Route path="/auth/Home" component={Home} />
        <Route path="/auth/About" component={About} />
        <Route path="/auth/Contact" component={Contact} />
        <Redirect to="/main" />
      </Switch>
    </div>
  )
}
