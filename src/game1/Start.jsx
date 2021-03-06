import React from "react";

const Start = (props) => {
    const {startGame, info} = props;

    return (
        <>

            <div
                className='start-zone '
            >

                <div className='info'>
                    {info.games !== 0 &&
                    `Hits: ${info.hits} 
                Round: ${info.games}`
                    }
                </div>

                <button className='start' onClick={startGame}>
                    {info.games === 0 ? 'Start Game' : 'Continue Game'}
                </button>
            </div>

        </>
    );
}

export default Start;
