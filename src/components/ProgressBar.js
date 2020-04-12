import React from 'react';

const ProgressBar = ({ progress, totalQuestions }) => {

  const width = (progress / totalQuestions) * 100;

  return(
    <div className="progress-bar" style={{width: `${width}%`}}></div>
  )
}

export default ProgressBar;