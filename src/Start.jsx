import React from "react";

const Start = (props) => {
    const { startGame } = props;

    return (
        <div className='game-zone '>

            <button className='start' onClick={startGame}>
                Start Game
            </button>

        </div>
    );
}

export default Start;