import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import GasTableCalculator from './GasTableCalculator';
import './GasTableCalculator.scss';
import About from './About';

// This component will be your main app
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GasTableCalculator} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);
