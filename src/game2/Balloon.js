import React, {useEffect, useRef, useState} from 'react';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const Balloon = (props) => {

    const {el, i, del} = props;
    const mountedRef = useRef(true)

    const [height, setHeight] = useState('wrapper')
    const [display, setDisplay] = useState(true)
    const [timer, setTimer] = useState(0)

    const checkPosition = () => {
        if (display === true) {
            if (mountedRef.current) {
                if (mountedRef.current.offsetTop < -200) {
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
            }, 1000);
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
            setHeight('wrapper up')
        }, getRandomArbitrary(500, 1000) * i);
    }, [])

    return (<>
            {/*{display &&*/}
            <div
                style={{left: `${el.left}px`}}
                className={height}
                id={el.id}
                ref={mountedRef}
            >
                     <div className={el.bang ? 'explosion' : 'balloon'}>
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
