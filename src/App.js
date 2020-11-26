import React, { useState} from 'react';
import Game from './game1/Game';
import './App.css';
import Start from "./game1/Start";
import gunShotSound from './sounds/Gunshot.mp3';
import pongSound from './sounds/Pong.mp3';
import popSound from './sounds/Pop.mp3';
import wrongSound from './sounds/Wrong.mp3';
import GameBalloons from "./game2/GameBalloons";

const gameInfo = {
    started: false,
    games: 0,
    hits: 0
}

function App() {

    const [gunShot] = useState(new Audio(gunShotSound));
    const [pong] = useState(new Audio(pongSound));
    const [pop] = useState(new Audio(popSound));
    const [wrong] = useState(new Audio(wrongSound));
    const [info, setInfo] = useState(gameInfo);
    const [start, setStart] = useState(false);

    const startGame = () => {
        setStart(!start)
    }

    return (
        <>
            {/*{start*/}
            {/*    ? <Game*/}
            {/*        gunShot={gunShot}*/}
            {/*        pong={pong}*/}
            {/*        startGame={startGame}*/}
            {/*        setInfo={setInfo}*/}
            {/*        info={info}*/}
            {/*    />*/}
            {/*    : <Start*/}
            {/*        startGame={startGame}*/}
            {/*        info={info}*/}
            {/*    />}*/}

            <GameBalloons pop={pop} wrong={wrong}/>
        </>
    );
}

export default App;
