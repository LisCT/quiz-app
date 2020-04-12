import React from 'react';
import ProgressBar from './ProgressBar';

const ScoreBoard = ({ score, currentQuestion, totalQuestions }) => {
  return(
    <div>
      <div>
        <h5>{currentQuestion + 1} / {totalQuestions}</h5>
        <ProgressBar progress={currentQuestion + 1} totalQuestions={totalQuestions}/>
      </div>
      <div>
        <h1>Score</h1>
        <h2>{ score }</h2>
      </div>
    </div>
  )
}

export default ScoreBoard;