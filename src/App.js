import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Quiz Home</h1>
    <Link to='/quiz'> Start Quiz </Link>
    <Link to='/highScores'> High Scores </Link>
  </div>
)

export default App;