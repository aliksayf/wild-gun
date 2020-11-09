import React, {useEffect, useState} from 'react';
import Game from './Game';
import './App.css';
import Start from "./Start";

const initialState = {
    started: false,
    games: 0
}

function App() {

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
