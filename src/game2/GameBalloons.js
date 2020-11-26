import React, {useEffect, useState, useRef} from 'react';
import './style.css';
import Balloon from "./Balloon";

const rangeArray = [50, 170, 290, 410, 530, 650];
const charArray = "abcdefghijklmnopqrstuvwxyz".split('')


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const randomFromArray = (arr) => {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

const createBalloon = () => {
    return {
        id: Math.random(),
        left: randomFromArray(rangeArray),
        value: randomFromArray(charArray),
        bang: false
    }
}

const initialInfo = {
    started: false,
    games: 0,
    hited: 0,
    missed: 0
}

const arrayOfBalloons = [];

for (let i = 0; i < 20; i++) {
    arrayOfBalloons.push(createBalloon())
}

const GameBalloons = (props) => {

    const {pop, wrong} = props

    const [bal, setBal] = useState(arrayOfBalloons)
    const [soundPop, setSoundPop] = useState(false)
    const [gameInfo, setGameInfo] =useState(initialInfo)
    const box = useRef(null);

    const findIdByValue = (value) => {
        const el = bal.find(el => el.value === value) || null
        return el && el.id
    }

    const deleteElementById = (id) => {
        const newArray = [...bal].filter(el => el.id !== id)
        setBal(newArray)

    }

    const playPop = () => {
        if(soundPop){
            pop.pause();
            pop.currentTime = 0;
            setTimeout(() => {pop.play()}, 10);
            setSoundPop(false)
        } else {
            setTimeout(() => {pop.play()}, 10);
            setSoundPop(true)
        }
    }

    const hit = (id) => {
        deleteElementById(id)
    }

    const miss = () => {
        wrong.pause();
        wrong.currentTime = 0;
        wrong.play()
    }

    useEffect(() => {
        box.current.focus()
    }, [])

    const keyPressHandler = (e) => {
        hit(3)
        if (bal.some(el => el.value === e.key.toLowerCase())) {
            const id = findIdByValue(e.key.toLowerCase()) || null
            let elem = document.getElementById(id)
            let rect = elem.getBoundingClientRect();
            if (rect && rect.top >= -120) {
                playPop()
                hit(id)
            }
        } else miss()
    }


    return (
        <div
            onKeyDown={(e) => keyPressHandler(e)}
            // onKeyPress={playPop}
            ref={box}
            tabIndex={0}
            className='game-zone-balloons'
        >
            {/*<div className='balloon'>*/}
            {/*    Me value*/}
            {/*</div>*/}

            {bal && bal.map((el, idx) => (
                    <Balloon key={el.id}
                             i={idx}
                             el={el}
                             del={deleteElementById}
                             pop={props.pop}
                             wrong={props.wrong}
                        // innerRef={innerRef}
                    />
                )
            )}


            {/*<img src={expl}></img>*/}
        </div>
    )
}

export default GameBalloons;
