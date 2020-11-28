import React, {useEffect, useRef} from 'react'

const Start = (props) => {

    const { start, info } = props;
    const button = useRef(true);

    useEffect(() => {
        button.current.focus()
    }, [])

    return (
            <div className='game-zone-balloons'>
                <div className='info'>
                    {info.games ? <p>Rounds: {info.games}</p> : null}
                    {info.games ? <p>Hits: {info.hits}</p> : null}
                    {info.games ? <p>Missed: {info.missed}</p> : null}
                </div>

                <button className='start'
                        ref={button}
                        onClick={start}>
                    {info.games === 0 ? 'Start Game' : 'Continue Game'}
                </button>
            </div>
    )
}

export default Start;
