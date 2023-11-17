import React, { useState } from 'react';
import './CoinToss.css'; // Ensure this CSS file is updated as well
import headsImage from './5dh-sowa-miw.png'; // Path to heads image
import tailsImage from './5dh-terma-miw.png'; // Path to tails image

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
    <div className="coin-toss-container">
      <h1>"Sbe3" wela "Malik"</h1>
      <div className={`coin ${flipping ? 'flip' : ''}`}>
        <img
          className="h-2"
          src={result === 'Sbe3' ? headsImage : tailsImage}
          alt={result ? result : 'Coin'}
        />
      </div>
      <button onClick={tossCoin}>gleb</button>
      {result && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default CoinToss;
