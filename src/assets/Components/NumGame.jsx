import React, { useState } from 'react';
import Cnfti from '../Images/clb.gif';
import HM from '../Images/hm.gif';
import DL from '../Images/lllg.gif';
import mario from '../Images/mario.gif';
import Mlogo from '../Images/ml.gif';
import Mvln from '../Images/mnVln.gif';
import MQ from '../Images/mq.gif';

const difficultyValue = (
  <>
    <span className='font-mono'>
      Select the Difficulty Level :
    </span> 
    <img src={Mlogo} alt="Mlogo" className="inline-block ml-1 w-10 mb-3" />
  </>
);

const hurrahYouWon = (
  <>
    <span  className='font-mono' style={{ backgroundImage: `url(${Cnfti})`}}>
    Hurray! You won
    </span> 
    <img src={HM} alt="HM" className="inline-block ml-1 w-16 mb-3" />
  </>
);


const youLost = (
  <>
    <span  className='font-mono'>
    You Lost !!
    </span> 
    <img src={Mvln} alt="Mvln" className="inline-block  ml-1 w-16 mb-3" />
  </>
);



const NumGame = () => {

  const [difficulty, setDifficulty] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [midNumber, setMidNumber] = useState(null);
  const [message, setMessage] = useState(difficultyValue);
  const [guessedNumber, setGuessedNumber] = useState('');
  const [lifelines, setLifelines] = useState(3);
  const [result, setResult] = useState('');

  const handleDifficultySelect = (level) => {
    
    setDifficulty(level);
    const maxNumber = level === 'Easy' ? 10 : 100;
    const randomNum = Math.floor(Math.random() * maxNumber) + 1;
    const midNum = Math.floor(maxNumber / 2);
    console.log(randomNum);

    setRandomNumber(randomNum);
    setMidNumber(midNum);
    setMessage(`Select a number from 1 to ${maxNumber}`);
  };

  const handleGuess = () => {
    const guessedNum = parseInt(guessedNumber);

    if (guessedNum === randomNumber) {
      setResult(hurrahYouWon);
      setMessage('');
    } else {
      const feedback =
        guessedNum < randomNumber
          ? guessedNum < midNumber
            ? 'Too less, try again'
            : 'Close but still low, try again'
          : guessedNum > midNumber
          ? 'Too high, try again'
          : 'Close but still high, try again';

      setMessage(feedback);
      setLifelines((prev) => prev - 1);

      if (lifelines === 1) {
        setResult(youLost);
        setMessage('');
      }
    }
  };

  const resetGame = () => {
    setDifficulty(null);
    setRandomNumber(null);
    setMidNumber(null);
    setMessage(difficultyValue);
    setGuessedNumber('');
    setLifelines(3);
    setResult('');
  };

  return (
    <div className='w-screen h-screen'>
      {/* Main Container */}
      <div className='w-full h-full flex items-center'>
        {/* 1st container */}
        <div className='w-1/3 h-full text-white'>
          <div className='w-full h-1/2'>
            <div className='w-full h-full flex items-center ml-4'>
              <img className='w-10' src={MQ} alt='' />
              <div className='ml-3 shadow-2xl mt-10 h-28 w-2/3 bg-black/30 pl-3 pt-3 text-sm rounded-bl-3xl font-mono'>
                Ready, Player !?! 🐱‍🚀<br />
                1. Select the Difficulty Level 🐱‍👤 <br />
                2. Guess the Correct Number 💡<br />
                3. You have Three Lifelines ♥
              </div>
            </div>
          </div>

          <div className='ml-16 font-mono text-2xl'>
            Lifelines Left:{' '}
            {[...Array(lifelines)].map((_, i) => (
              <span key={i}>💖</span>
            ))}
          </div>
        </div>
        {/* 1st Container Ends Here */}









        {/* 2nd Container */}
        <div className='w-1/3 h-full bg-black/5 shadow-2xl text-white flex flex-col justify-center items-center'>
          <div className='flex flex-row'>
            <img className='w-12' src={mario} alt='' />
            <div className='font-mono text-2xl pt-4 ml-1'>Welcome to the Number Game:</div>
          </div>

          <div>
            <p>{message}</p>
          </div>

          {difficulty && (
            <div>
              <input
                type='text'
                value={guessedNumber}
                onChange={(e) => setGuessedNumber(e.target.value)}
                className='mt-3 rounded-lg p-2 text-black'
              />
              <button onClick={handleGuess} className='ml-3 bg-green-600 px-4 py-2 rounded-lg shadow-md'>
                Guess
              </button>
            </div>
          )}

          <div>
            <p>{result}</p>
          </div>

          <div className='mb-36 mt-44'>
            <button onClick={resetGame} className='w-24 h-10 bg-red-600 rounded-3xl shadow-2xl font-mono hover:scale-105'>
              Reset📯
            </button>
          </div>
        </div>
        {/* 2nd Container ends Here */}











        {/* 3rd Container */}
        <div className='w-1/3 h-full text-white flex flex-col justify-center items-center'>
          <div>
            <img className='w-16 ml-36' src={DL} alt='' />
          </div>
          <div className='h-40 w-3/4 mb-36 bg-black/30 shadow-2xl font-mono rounded-full flex flex-col items-center pt-5'>
            Choose The Difficulty Level:  <br />
            <div className='mt-3'>
              <button
                className='w-20 h-10 bg-green-600 rounded-3xl hover:scale-105'
                onClick={() => handleDifficultySelect('Easy')}
              >
                🎈Easy🍬
              </button>{' '}
              <br />
              <button
                className='w-20 h-10 bg-red-600 mt-2 rounded-3xl hover:scale-105'
                onClick={() => handleDifficultySelect('Hard')}
              >
                🔥Hard🎃
              </button>
            </div>
          </div>
        </div>
        {/* 3rd Container */}
      </div>
      {/* Main Container Ends Here */}
    </div>
  );
};

export default NumGame;
