import { useState, useEffect } from 'react';

const convertResponse = (response) => {
  return response.map((response) => {
    const { question, incorrect_answers, correct_answer } = response;
    const formattedQuestion = {
      question,
      options: [...incorrect_answers],
    }

    formattedQuestion.answer = Math.floor(Math.random() * 4);
    formattedQuestion.options.splice(formattedQuestion.answer, 0, correct_answer)

    return formattedQuestion;
  });
}

const useFetch = (api) => {
  const [ data, setData ] = useState('');
  const [ isLoading, setIsloading ] = useState(true)
  
   useEffect(() => {
    (async function gettingData(){
      try{
        const response = await fetch(api);
        const { results } = await response.json();
        setData(convertResponse(results));
        setIsloading(false);
      }
      catch(error){
        console.log(`Something went wrong during the fetch: ${error}`);
      }
    })(); 

  }, [api]);

  return [data, isLoading];
}

export default useFetch;