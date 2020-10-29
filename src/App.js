import React, { useState, useEffect } from 'react';
import sound from './Bomb.mp3';
import './App.css';
import Figure from "./Figure";
import x from "./svg/Union.svg"
import Vector1 from "./svg/Vector1";

const listOfFigures = [{
    id: 1,
    order: 'first',
    bgc: 'darkgrey'
  },
  {
    id: 2,
    order: 'second',
    bgc: 'grey'
  },
  {
    id: 3,
    order: 'third',
    bgc: 'darkgrey'
  }]

function App() {

  const [audio] = useState(new Audio(sound));

  const toggle = () => {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
  }

  return (
    <div className={`
      game-zone
      aim
      `}
         onClick={toggle}
        >

      {listOfFigures.map(el =>
        <Figure key={el.id} el={el} />
      )}
      <Vector1/>
    </div>
  );
}

export default App;
