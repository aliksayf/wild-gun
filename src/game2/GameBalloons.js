import React, {useEffect, useState, useRef} from 'react';
import './style.css';
import Balloon from "./Balloon";

const rangeArray = [50, 170, 290, 410, 530, 650];
const charArray = "abcdefghijklmnopqrstuvwxyz".split('')

function delay (t) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("anything");
        }, t);
    });
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

const arrayOfBalloons = [];

for (let i = 0; i < 2; i++) {
    arrayOfBalloons.push(createBalloon())
}

const GameBalloons = (props) => {

    const {pop, wrong, info, start, changeInfo} = props
    const speed = 6 - info.games * 0.2

    const [bal, setBal] = useState(arrayOfBalloons)
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
        pop.pause();
        pop.currentTime = 0;
        pop.play()
    }

    const hit = (id) => {
        const arr = [...bal]
        .map(el => el.id === id
            ? {...el, bang : true}
            : el)
        setBal(arr)

        delay(70)
            .then(
            () => {
                deleteElementById(id)
            }
        );

        changeInfo('hits')
    }

    const wrongHit = () => {
        wrong.pause();
        wrong.currentTime = 0;
        wrong.play();
    }

    const miss = () => {
        changeInfo('missed')
    }

    useEffect(() => {
        box.current.focus()
    }, [])

    useEffect(() => {
        if(bal.length === 0) {
            start()
            changeInfo('games')
        }
    }, [bal])

    const keyPressHandler = (e) => {
        const id = findIdByValue(e.key.toLowerCase()) || null
        if (id) {
            let elem = document.getElementById(id)
            let rect = elem.getBoundingClientRect();
            if (rect.top >= -130 && rect.top < 480) {
                console.log('press')
                playPop()
                hit(id)
            }
        } else if(charArray.includes(e.key.toLowerCase())) wrongHit()
    }


    return (
        <div id="screen"
             onKeyPress={(e) => keyPressHandler(e)}
             ref={box}
             tabIndex={30}
            >
            <div
                className='game-zone-balloons'
            >

                {bal && bal.map((el, idx) => (
                        <Balloon key={el.id}
                                 i={idx}
                                 speed={speed}
                                 el={el}
                                 miss={miss}
                                 del={deleteElementById}
                                 pop={props.pop}
                                 wrong={props.wrong}
                        />
                    )
                )}

            </div>
        </div>
    )
}

export default GameBalloons;
