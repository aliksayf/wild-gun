import React, {useEffect, useState} from 'react';


const charArray = "abcdefghijklmnopqrstuvwxyz".split('')
const randomFromArray = (arr) => {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}
const start = Date.now();

const Bal = (props) => {

    const {el, pop, i, del} = props;
    // console.log('el', el)

    const [height, setHeight] = useState(600)
    const [display, setDisplay] = useState(true)

    let timer;

    const remove = () => {
        clearTimeout(timer)
        console.log('remove')
        del(el.id)

    }

    const lift = () => {
        for (let i = 0; i <= 600; i++) {
            timer = setTimeout(() => {
                if (i === 600) {
                    remove();
                    setDisplay(false)
                } else setHeight(600 - i)
            }, i * 5)
        }
    }

    useEffect(() => {
        const interval = setTimeout(() => {
            lift()
        }, 1000 * i)

        return () => {
            clearInterval(interval)

        };
    }, [])

    // const check = setInterval(() => {
    //
    //     const element = document.getElementById(`${el.id}`)
    //     if (element) console.log(element.offsetTop)
    //     // if (element && element.offsetTop <= 0) {
    //         del(el.id)
    //         console.log('delete')
    //         clearInterval(check)
    //
    //     // }
    // }, 1700)
    //
    //
    //
    //


    return (<>
            {display &&
            <div
                style={{left: `${el.left}px`, top: `${height}px`}}
                className='wrapper'
                id={el.id}
            >
                <div className='balloon'>
                    <h1>
                        {/*{height}*/}
                        {el.value.toUpperCase()}
                    </h1>
                </div>
            </div>
            }
        </>

    )
}

export default Bal;
