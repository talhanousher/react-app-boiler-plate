import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Login from '../containers/Login';
import Register from '../containers/Register';

export default function Auth() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Redirect to="/main" />
      </Switch>
    </div>
  )
}
