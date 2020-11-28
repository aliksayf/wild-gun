import React, {useEffect, useRef, useState} from 'react';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const randomFromArray = (arr) => {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

const colors = ['blue', 'yellow', 'pink', 'green', 'orange']


const Balloon = (props) => {

    const {el, i, del} = props;
    const mountedRef = useRef(true)

    const [height, setHeight] = useState('wrapper')
    const [display, setDisplay] = useState(true)
    const [timer, setTimer] = useState(0)
    const [color] = useState(randomFromArray(colors))

    const checkPosition = () => {
        if (display === true) {
            if (mountedRef.current) {
                if (mountedRef.current.offsetTop < -130) {
                    mountedRef.current = false;
                    setDisplay(false)
                    del(el.id)
                }
            }
        }
    }


    useEffect(() => {
        let interval = null;
        if (display) {
            checkPosition()
        }
        if (display) {
            interval = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 500);
        } else if (!display && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [display, timer]);

    // useEffect(() => {
    //     // if (display){
    //     //     checkPosition()
    //     // }
    // }, [timer])

    useEffect(() => {
        setTimeout(() => {
            setHeight(height + ' up')
        }, 1000 * i);
    }, [])

    return (<>
            {/*{display &&*/}
            <div
                style={{left: `${el.left}px`}}
                tabIndex={20 - i}
                className={height}
                id={el.id}
                ref={mountedRef}
            >
                     <div className={el.bang ? 'explosion' : 'balloon ' + color}>
                    <h1>
                        {/*{el.bang}*/}
                        {!el.bang && el.value.toUpperCase()}
                        {/*{el.value.toUpperCase()}*/}
                    </h1>
                </div>

            </div>
            {/*}*/}
        </>

    )
};

export default Balloon;
