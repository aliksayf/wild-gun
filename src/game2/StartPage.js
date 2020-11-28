import React, { useState} from 'react';
import popSound from '../sounds/Pop.mp3';
import wrongSound from '../sounds/Wrong.mp3';
import GameBalloons from "../game2/GameBalloons";
import Start from "./Start";

const gameInfo = {
    started: false,
    games: 0,
    hits: 0,
    missed: 0
}

function App() {

    const [pop] = useState(new Audio(popSound));
    const [wrong] = useState(new Audio(wrongSound));
    const [info, setInfo] = useState(gameInfo);
    const [start, setStart] = useState(false);

    const startGame = () => {
        setStart(!start)
    }

    const changeInfo = (key) => {
        const newInfo = {...info}
        newInfo[key] += 1
        setInfo(newInfo)
    }

    return (
        <>
            {start
                ? <GameBalloons
                    info={info}
                    pop={pop}
                    wrong={wrong}
                    changeInfo={changeInfo}
                    start={startGame}/>
                : <Start
                    start={startGame}
                    info={info}/>}
        </>
    );
}

export default App;
