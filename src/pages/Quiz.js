import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../components/hooks/useFetch';
import Loader from '../components/Loader'
import Question from '../components/Question';
import ScoreBoard from '../components/ScoreBoard';
import Result from '../components/Result';

const api = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple';

function Quiz(){
  const [data, isLoading ] =  useFetch(api);
  const [currentQuestion, setCurrentQuestion ] = useState(0);
  const [score, setScore] = useState(0);
  const completedQuiz = !isLoading && currentQuestion === data.length;
  const incompletedQuiz = !isLoading && currentQuestion !== data.length;
  const history = useHistory();

  const handleNextQuestion = (selectedOption) => {
    setCurrentQuestion(prevState => prevState + 1);
    selectedOption === 'correct' && setScore(prevState => prevState + 10);
  }
  
  const scoreSaved = () => {
    history.push('/');
  }

  return(
    <Fragment>
      {isLoading && <Loader/>}
      {incompletedQuiz && 
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
      {completedQuiz && <Result score={score} scoreSaved={scoreSaved}/>}
    </Fragment>
  )

}

export default Quiz;
