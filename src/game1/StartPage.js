import React, { useState} from 'react';
import Game from './Game';
import Start from "./Start";
import gunShotSound from '../sounds/Gunshot.mp3';
import pongSound from '../sounds/Pong.mp3';
import './style.css';

const gameInfo = {
    started: false,
    games: 0,
    hits: 0
}

function App() {

    const [gunShot] = useState(new Audio(gunShotSound));
    const [pong] = useState(new Audio(pongSound));
    const [info, setInfo] = useState(gameInfo);
    const [start, setStart] = useState(false);

    const startGame = () => {
        setStart(!start)
    }

    return (
        <>
            {start
                ? <Game
                    gunShot={gunShot}
                    pong={pong}
                    startGame={startGame}
                    setInfo={setInfo}
                    info={info}
                />
                : <Start
                    startGame={startGame}
                    info={info}
                />}

        </>
    );
}

export default App;
