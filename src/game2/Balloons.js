import React, {useEffect, useState} from 'react';
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

for(let i = 0; i < 3; i++) {
    arrayOfBalloons.push(createBalloon())
}
const Balloons = (props) => {


    const [bal, setBal] = useState([...arrayOfBalloons])


    // const randomInterval = () => {
    //     if (bal.length < 5) {
    //
    //         let newArr = [...bal]
    //         newArr.push(createBalloon())
    //         setBal(newArr)
    //     } else clearInterval()
    //
    // }
    //
    // useEffect(() => {
    //
    //     setTimeout(() => {
    //         randomInterval()
    //     }, getRandomArbitrary(500, 1500))
    //
    // }, [bal])


    return (
        <div
            className='balloon-zone'>
            {bal &&
            bal.map((el, idx) => (
                <Bal key={idx} el={el} pop={props.pop} wrong={props.wrong}/>
            ))}

            {/*<img src={expl}></img>*/}
        </div>
    )
}

export default Balloons;
