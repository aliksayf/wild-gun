import React from 'react';
import Figure from "./Figure";
import Vector1 from "./svg/Vector1";
import {list} from './data'

const listOfFigures = list;

function Round(props) {


        let arrayFigures = []
        for ( let i = 1; i <= 3; i++){
            arrayFigures[i] = listOfFigures[Math.ceil(Math.random() * listOfFigures.length)]
        }

    return (
        <>
            {arrayFigures.map((el, i) =>
                <Figure key={i} el={el} pong={props.pong}/>
            )}
            <Vector1/>
        </>
    );
}

export default Round;
