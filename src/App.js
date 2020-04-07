import React from 'react';
import useFetch from './components/useFetch';

const api = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple';

function App(){
  const [data, isLoading ] =  useFetch(api);

  if(isLoading){
    return <h1>Is Loading</h1>
  }else{
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quiz App</h1>
        </header>
      </div>
    );
  }
}

export default App;
