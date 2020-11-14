import React from "react";

const Start = (props) => {
    const { startGame, info } = props;

    return (
        <div className='game-zone '>

            <h5 className='info'>
            {info.games !== 0 &&
                `Hits: ${info.hits} 
                Round: ${info.games}`
            }
            </h5>

            <button className='start' onClick={startGame}>
                {info.games === 0 ? 'Start Game' : 'Continue Game'}
            </button>

        </div>
    );
}

export default Start;
