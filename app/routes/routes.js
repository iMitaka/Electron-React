import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../components/home/home';
import Counter from '../components/counter/counter';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/counter" component={Counter} />
    <Route path="/" component={Home} />
  </Switch>
);
