import React, {useEffect, useState} from 'react';
import Round from './Round';
import sound from './Gunshot.mp3';

function Game(props) {

    const{ startGame, setInfo, info } = props;

    const [audio] = useState(new Audio(sound));

    const panel = <div></div>

    let i = 1;
    const rCycle = (t) => {
        setTimeout(() => {

            if(i < 7){
                if(i % 2 === 0) {
                    setRound(<Round/>)
                    rCycle(3000);
            } else {
                    setRound(panel);
                    rCycle(1000);
                }
            } else {
                clearTimeout();
                const newInfo = {...info, games: info.games + 1}
                // newInfo.games = info.games + 1
                setInfo(newInfo)
                startGame();
            }
            i++
        }, t)
    }

    useEffect(() => {
        rCycle(500);
    }, [])

    const [round, setRound] = useState(panel)

    const toggle = () => {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }

    return (
        <div className={`game-zone aim`}
             onPointerDown={toggle}
        >
            {round}
            {/*<Round/>*/}
        </div>
    );
}

export default Game;
