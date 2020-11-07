import React, { useState, useEffect } from 'react';
import Figure from "./Figure";
import Vector1 from "./svg/Vector1";

const listOfFigures = [{
    id: 1,
    order: 'first',
    bgc: 'darkgrey'
  },
  {
    id: 2,
    order: 'second',
    bgc: 'grey'
  },
  {
    id: 3,
    order: 'third',
    bgc: 'darkgrey'
  }]

function Round() {


  return (
    <>
      {listOfFigures.map(el =>
        <Figure key={el.id} el={el} />
      )}
      <Vector1/>
    </>
  );
}

export default Round;
