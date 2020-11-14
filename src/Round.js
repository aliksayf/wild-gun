import React from 'react';
import Figure from "./Figure";
import Vector1 from "./svg/Vector1";
import {list} from './data'


function Round(props) {
    const { info, setInfo } = props;

    const listOfFigures = [...list];

    const hittedTarget = () => {
        const newInfo = {...info, hits: info.hits += 1}
        setInfo(newInfo)
    }


    let arrayFigures = []
        for ( let i = 0; i < 3; i++){
            let number = Math.floor(Math.random() * listOfFigures.length )
            arrayFigures.push(listOfFigures[number])
            listOfFigures.splice(number, 1)
        }

    return (
        <>
            {arrayFigures.map((el, i) =>
                <Figure key={i} el={el} pong={props.pong} hittedTarget={hittedTarget}/>
            )}
            <Vector1/>

        </>
    );
}

export default Round;
