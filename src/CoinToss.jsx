import React, { useState } from 'react';
import './CoinToss.css'; // Ensure this CSS file is updated as well
import headsImage from './5dh-sowa-miw.png'; // Adjust the path as per your directory structure
import tailsImage from './5dh-terma-miw.png';


const CoinToss = () => {
  const [result, setResult] = useState('');
  const [flipping, setFlipping] = useState(false);



  const tossCoin = () => {
    setFlipping(true);
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Sbe3' : 'Malik';
      setResult(outcome);
      setFlipping(false);
    }, 1000); // Duration of the flip animation
  };

  return (
    <div className="coin-toss-container" >
      <h1>"Sbe3" wela "Malik"</h1>
      <div className={`coin ${flipping ? 'flip' : ''} `}>
      <img 
      class="h-2"
      src={result === 'Heads' ? headsImage : tailsImage} alt={result} />
      </div>
      <button onClick={tossCoin}>gleb</button>
      {result && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default CoinToss;
