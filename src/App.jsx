import React from 'react';
import NumGame from './assets/Components/NumGame';
import BG from './assets/Images/bg2.jpg';

const App = () => {
  return (
    <div 
    className="h-screen  w-screen  bg-cover bg-center "
    style={{ backgroundImage: `url(${BG})` }} >
      <NumGame />
    </div>
  );
};

export default App;
