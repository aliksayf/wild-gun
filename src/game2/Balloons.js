import React, {useEffect, useState, useRef} from 'react';
import './style.css';
import Bal from "./Bal";

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
        value: randomFromArray(charArray)
    }
}

const arrayOfBalloons = [];

for (let i = 0; i < 3; i++) {
    arrayOfBalloons.push(createBalloon())
}

const Balloons = (props) => {

    const {pop} = props

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
        // pop.pause();
        // pop.currentTime = 0;
        pop.play();
    }

    const hit = (id) => {
        deleteElementById(id)
        playPop()
        console.log('hit')
    }

    useEffect(() => {
            box.current.focus()
        }, [])

    const keyPressHandler = (e) => {
        console.log('missed')
        if (bal.some(el => el.value === e.key.toLowerCase())) {
            const id = findIdByValue(e.key.toLowerCase()) || null
            let elem = document.getElementById(id)
            let rect = elem.getBoundingClientRect();
            if (rect && rect.top >= -120) {
                hit(id)
            }
        }
    }

    // window.addEventListener('keydown', (event) => {
    //     if(bal.some(el => el.value === event.key.toLowerCase())){
    //         const id = findIdByValue(event.key.toLowerCase()) || null
    //         let elem = document.getElementById(id)
    //         let rect = elem.getBoundingClientRect();
    //         // console.log('rect', rect)
    //         // console.log('top', elem.offsetTop)
    //         if(rect && rect.top >= 100){
    //             console.log('rect', rect)
    //             // hit(id)
    //         }
    //
    //         // console.log('ley', event.key)
    //     }
    // });


    return (
        <div
            onKeyDown={(e) => keyPressHandler(e)}
            ref={box}
            tabIndex={0}
            className='game-zone-balloons'
        >
            {/*<div className='balloon'>*/}
            {/*    Me value*/}
            {/*</div>*/}

            {bal && bal.map((el, idx) => (
                    <Bal key={el.id}
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

export default Balloons;
