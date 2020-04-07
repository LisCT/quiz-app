import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import NotFound from './pages/NotFound';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default Root;