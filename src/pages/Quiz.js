import React, { useState, Fragment } from 'react';
import useFetch from '../components/hooks/useFetch';
import Loader from '../components/Loader'
import Question from '../components/Question';
import ScoreBoard from '../components/ScoreBoard';
import Result from '../components/Result';

const api = 'https://opentdb.com/api.php?amount=3&category=27&difficulty=easy&type=multiple';

function Quiz({ history }){
  const [data, isLoading ] =  useFetch(api);
  const [currentQuestion, setCurrentQuestion ] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleNextQuestion = (selectedOption) => {
    selectedOption === 'correct' && setScore(prevState => prevState + 10);
    (currentQuestion === (data.length -1)) && setDone(true);
    !done && setCurrentQuestion(prevState => prevState + 1);
  }

  const scoreSaved = () => {
    history.push('/');
  }

  return(
    <Fragment>
      {isLoading && <Loader/>}
      {!done && !isLoading && 
        <div className="App">
          <ScoreBoard 
            score = { score }
            currentQuestion = {currentQuestion}
            totalQuestions = {data.length}
          />
          <Question 
            currentQuestion={currentQuestion} 
            questions={data} 
            handleNextQuestion={handleNextQuestion}
          />
        </div>
      }
      {done && <Result score={score} scoreSaved={scoreSaved}/>}
    </Fragment>
  )
}

export default Quiz;
