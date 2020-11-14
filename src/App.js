import React, {useEffect, useState} from 'react';
import Game from './Game';
import './App.css';
import Start from "./Start";
import gunShotSound from './sounds/Gunshot.mp3';
import pongSound from './sounds/Pong.mp3';

const initialState = {
    started: false,
    games: 0
}

function App() {

    const [gunShot] = useState(new Audio(gunShotSound));
    const [pong] = useState(new Audio(pongSound));
    const [info, setInfo] = useState(initialState);
    const [start, setStart] = useState(false);

    useEffect(()=>
        console.log(info)
        , [info])

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
