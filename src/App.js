import React, {useEffect, useState} from 'react';
import Game from './Game';
import sound from './Gunshot.mp3';
import './App.css';

function App() {
    const [audio] = useState(new Audio(sound));

    const panel = <div></div>

    let i = 1;
    const rCycle = () => {
        setTimeout(() => {
            i % 2 !== 0 ? setRound(<Game/>) : setRound(panel);
            i++
            i < 7 && rCycle();
        }, 3000)
    }

    useEffect(() => {
        rCycle();
    }, [])

    const [round, setRound] = useState(panel)

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
             onPointerDown={toggle}
        >
            {round}
            {/*<Game/>*/}
        </div>
    );
}

export default App;
