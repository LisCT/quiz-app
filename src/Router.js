import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import NotFound from './pages/NotFound';
import Quiz from './pages/Quiz';
import HighScores from './pages/HightScores';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/quiz" exact component={Quiz} />
      <Route path="/highScores" exact component={HighScores} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default Root;