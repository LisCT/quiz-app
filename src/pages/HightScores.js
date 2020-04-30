import React, { useEffect, useState } from 'react';
import { useFirebase } from '../components/firebase/FirebaseContext';
import Loader from '../components/Loader';

 const HighScores = () => {
  const firebase = useFirebase();
  const [scores, setScores] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    firebase.scores().once('value', (snapshot) => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
      setScores(sortedScores);
      setisLoading(false);
    })
  },[firebase]);

  const formatScoreData = (firebaseScores) => {
    const scores = [];
    for(let key in firebaseScores){
      const val = firebaseScores[key];
      val['key'] = key;
      scores.push(val);
    }
    // sorted and return only the top 10
    return scores
      .sort((scores1, scores2) => scores2.score - scores1.score )
      .slice(0,10);

  }

  return(
    <div>
      {isLoading ? <Loader/> : (
        <div id="higscoreList">
          <h1>Hight Scores</h1>
          <ul>
            {scores.map((record) => ( 
              <li key={record.key}>{`${record.name} - ${record.score}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
};

export default HighScores;