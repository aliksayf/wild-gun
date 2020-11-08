import React, {useEffect, useState} from 'react';
import Game from './Game';
import './App.css';
import Start from "./Start";

const initialState = {
    started: false
}

function App() {

    const [info, setInfo] = useState({initialState});
    const startGame = () => {
        setInfo({...info, started: !info.started})
    }

    return (
        <>
            {info.started ? <Game startGame={startGame}/> : <Start startGame={startGame}/>}



        </>
    );
}

export default App;
