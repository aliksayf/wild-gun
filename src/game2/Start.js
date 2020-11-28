import React from 'react'

const Start = (props) => {

    const { start, info } = props;

    return (
        <>
            <div className='game-zone-balloons'>
                <div className='info'>
                    {info.games ? <p>Rounds: {info.games}</p> : null}
                    {info.games ? <p>Hits: {info.hits}</p> : null}
                    {info.games ? <p>Missed: {info.missed}</p> : null}
                </div>

                <button className='start' onClick={start}>
                    {info.games === 0 ? 'Start Game' : 'Continue Game'}
                </button>
            </div>
        </>
    )
}

export default Start;
