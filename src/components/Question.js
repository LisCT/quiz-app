import React, { useState } from 'react';

const Question = ({ questions, currentQuestion, handleNextQuestion }) => {

  const { question, options, answer } = questions[currentQuestion];
  const [ answering, setAnswering ] = useState(false);

  const checkQuestion = ( event, index ) => {
    
    if(answering) return;
    setAnswering(true);

    const targetClass = event.target.classList;
    const selectedOption = (index === answer) ? `correct` : 'incorrect';
    targetClass.add(selectedOption);

    let timeout = setTimeout(() => {
      handleNextQuestion(selectedOption);
      targetClass.remove(selectedOption);
      setAnswering(false);
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