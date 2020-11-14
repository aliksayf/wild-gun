import React, {useEffect, useState} from 'react';
import Round from './Round';

function Game(props) {

    const{ startGame, setInfo, info, gunShot, pong } = props;

    const panel = <div></div>

    const setStart = () => {
        startGame();
    }

    let i = 1;
    const rCycle = (t) => {
        setTimeout(() => {

            if(i < 7){
                if(i % 2 === 0) {
                    setRound(<Round pong={pong} info={info} setInfo={setInfo}/>)
                    rCycle(3000);
            } else {
                    setRound(panel);
                    rCycle(500);
                }
            } else {
                clearTimeout();
                const newInfo = {...info, games: info.games + 1}
                setInfo(newInfo)
                setTimeout(()=> setStart(), 500)
            }
            i++
        }, t)
    }

    useEffect(() => {
        rCycle(500);
    }, [])

    const [round, setRound] = useState(panel)

    const toggle = () => {
        gunShot.pause();
        gunShot.currentTime = 0;
        gunShot.play();
    }

    return (
        <div className={`game-zone aim`}
             onPointerDown={toggle}
        >

            {round}
            <div style={{bottom: '332px'}} className='bushes'>{null}</div>
            <div style={{bottom: '150px'}} className='bushes'>{null}</div>
            <div style={{bottom: '-32px'}} className='bushes'>{null}</div>

        </div>
    );
}

export default Game;
