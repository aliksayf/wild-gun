import React from "react";

const Start = (props) => {
    const { startGame } = props;

    return (
        <h1>
            <button onClick={startGame}>
                Start Game
            </button>
        </h1>
    );
}

export default Start;