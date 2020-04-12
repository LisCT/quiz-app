import React, { useState } from 'react';
import useFetch from './components/hooks/useFetch';
import Loader from './components/Loader';
import Question from './components/Question';

const api = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple';

function App(){
  const [data, isLoading ] =  useFetch(api);
  const [currentQuestion, setCurrentQuestion ] = useState(0);

  const handleNextQuestion = () => {

    setCurrentQuestion(prevState => prevState + 1);

  }

  if(isLoading){

    return <Loader/>

  }else{
    return (

      <div className="App">
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
