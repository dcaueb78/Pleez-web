import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

export default function Route() {
  return(
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registro" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/perfil" exact component={Profile} />
    </Switch>
  )
}
