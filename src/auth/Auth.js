import React from 'react';
import { Button } from "antd";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from '../containers/Login';
import Register from '../containers/Register';

export default function Auth() {
  return (
    <div>
      <Button>Login </Button>
      <Button>Register</Button>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Redirect to="/main" />
      </Switch>
    </div>
  )
}
