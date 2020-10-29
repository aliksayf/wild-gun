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
  }]

function App() {

  let audio = new Audio(sound)

  // useEffect(() => {
  //   audio.load();
  // }, [])


  return (
    <div className={`
      game-zone
      aim
      `}
         // onClick={audio.play}
        >

      {listOfFigures.map(el =>
        <Figure key={el.id} el={el} />
      )}
      <Vector1/>
    </div>
  );
}

export default App;
