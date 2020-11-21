import React, {useEffect, useState} from 'react';
import './style.css';
import Bal from "./Bal";

const rangeArray = [50, 170, 290, 410, 530, 650];

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const randomFromArray = (arr) => {
    let index = Math.floor(Math.random() * arr.length )
    return arr[index]
}

const Balloons = (props) => {

    const [bal, setBal] = useState([randomFromArray(rangeArray)])


    const randomInterval = (int) => {
        if(bal.length < 25) {
            let newArr = [...bal]
            setTimeout(()=>{
            newArr.push(randomFromArray(rangeArray))
            // console.log(bal)
            setBal(newArr)
        }, int)
        }
    }

    useEffect(()=>{
            randomInterval(getRandomArbitrary(500, 1000))
    }, [bal])


    return (
        <div
            className='balloon-zone'>
            {bal  &&
            bal.map((el, idx) => (
                        <Bal key={idx} el={el} pop={props.pop}/>
                    ))}

            {/*<img src={expl}></img>*/}
        </div>
    )
}

export default Balloons;
