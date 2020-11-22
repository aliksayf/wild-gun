import React, { useState} from 'react';
import Game from './game1/Game';
import './App.css';
import Start from "./Start";
import gunShotSound from './sounds/Gunshot.mp3';
import pongSound from './sounds/Pong.mp3';
import popSound from './sounds/Pop.mp3';
import wrongSound from './sounds/Wrong.mp3';
import Balloons from "./game2/Balloons";

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

            <Balloons pop={pop} wrong={wrong}/>
        </>
    );
}

export default App;
