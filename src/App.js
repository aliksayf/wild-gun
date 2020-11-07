import React, {useEffect, useState} from 'react';
import Game from './Game';
import sound from './Gunshot.mp3';
import './App.css';

function App() {
    const [audio] = useState(new Audio(sound));

    const panel = <div></div>

    let i = 1;
    const rCycle = (t) => {
        setTimeout(() => {
            // i % 2 !== 0 ? setRound(<Game/>) : setRound(panel);
            // i++
            if(i < 7){
                if(i % 2 !== 0) {
                    setRound(<Game/>)
                    rCycle(3000);
            } else {
                    setRound(panel);
                    rCycle(1000);
                }
            }
            i++
        }, t)
    }

    useEffect(() => {
        rCycle(500);
    }, [])

    const [round, setRound] = useState(<Game/>)

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
