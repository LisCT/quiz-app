import React from 'react';

const Question = ({ questions, currentQuestion, handleNextQuestion }) => {

  const { question, options, answer } = questions[currentQuestion];

  const checkQuestion = (event, index) => {
     const target = event.target;

    if(index === answer){
      target.classList.add('answer-correct');
    }else {
      target.classList.add('answer-incorrect');
    }

    let timeout = setTimeout(() => {
      handleNextQuestion();

      // remove classes
      if(index === answer) {
        target.classList.remove('answer-correct');
      } else{ 
        target.classList.remove('answer-incorrect');
      }

      return clearTimeout(timeout);
    }, 1200);
  }

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{__html: question }}></h1>
      <ol>
        {options.map((option, index)=>(
          <li 
            key={index} 
            dangerouslySetInnerHTML={{__html: option}}
            onClick={(event) => checkQuestion(event, index)}
          ></li>
        ))}
      </ol>
    </div>
  )
};

export default Question;