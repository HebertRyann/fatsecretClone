import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import Login from '../../pages/login';
import SignUp from '../../pages/signUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/sigup" component={SignUp} />
  </Switch>
)

export default Routes;