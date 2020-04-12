import React, { useState } from 'react';
import useFetch from './components/hooks/useFetch';
import Loader from './components/Loader';
import Question from './components/Question';
import ScoreBoard from './components/ScoreBoard';

const api = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple';

function App(){
  const [data, isLoading ] =  useFetch(api);
  const [currentQuestion, setCurrentQuestion ] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = (selectedOption) => {
    setCurrentQuestion(prevState => prevState + 1);
    selectedOption === 'correct' && setScore(prevState => prevState + 10);
  }

  if(isLoading){

    return <Loader/>

  }else{
    return (

      <div className="App">
        <ScoreBoard 
          score = { score }
          currentQuestion = { currentQuestion }
          totalQuestions = {data.length}
        />
        <Question 
          currentQuestion={currentQuestion} 
          questions={data} 
          handleNextQuestion={handleNextQuestion}
        />
      </div>

    );
  }
}

export default App;
