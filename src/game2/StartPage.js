import React, { useState} from 'react';
import pongSound from '../sounds/Pong.mp3';
import popSound from '../sounds/Pop.mp3';
import wrongSound from '../sounds/Wrong.mp3';
import GameBalloons from "../game2/GameBalloons";

const gameInfo = {
    started: false,
    games: 0,
    hits: 0
}

function App() {

    const [pop] = useState(new Audio(popSound));
    const [wrong] = useState(new Audio(wrongSound));
    const [info, setInfo] = useState(gameInfo);
    const [start, setStart] = useState(false);

    const startGame = () => {
        setStart(!start)
    }

    return (
        <>
            <GameBalloons pop={pop} wrong={wrong}/>
        </>
    );
}

export default App;
