import React, {useEffect, useState} from 'react';
import Round from './Round';
import sound from './Gunshot.mp3';

function Game(props) {

    const{ startGame } = props;

    const [audio] = useState(new Audio(sound));

    const panel = <div></div>

    let i = 1;
    const rCycle = (t) => {
        setTimeout(() => {
            // i % 2 !== 0 ? setRound(<Round/>) : setRound(panel);
            // i++
            if(i <= 7){
                if(i % 2 === 0) {
                    setRound(<Round/>)
                    rCycle(3000);
            } else {
                    setRound(panel);
                    rCycle(1000);
                }
            } else {
                clearTimeout();
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
        <div
             onPointerDown={toggle}
        >
            {round}
            {/*<Round/>*/}
        </div>
    );
}

export default Game;
