import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

export default function Routes() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Pokemon} exact path="/pokemon/:id" />
    </Switch>
  );
}
