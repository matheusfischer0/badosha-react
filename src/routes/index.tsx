import React from 'react';

import { Switch } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

import Route from './Route';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      {/* <Route path="/signup" component={SignUp}></Route> */}
      {/* <Route path="/dashboard" component={Dashboard} isPrivate></Route> */}
    </Switch>
  );
};

export default Routes;
