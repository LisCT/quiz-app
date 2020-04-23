import React, { useState } from 'react';

const Result = ({ score }) => {

  const [ userName, setUserName ] = useState('');

  const handleChange =(e) => {
    setUserName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const record = {
      name: userName,
      score
    }
    console.log(record);
  }

  return(
  <div>
    <h1>Final Score: {score}</h1>
    <p>Add your score to the ranking list.</p>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">User Name</label>
      <input 
        type="text" 
        id="name"
        value={userName}
        onChange={handleChange}
      />
      <button
        type="submit"
        disabled={!userName}
      >Add</button>
    </form>

  </div>
  )
};

export default Result;