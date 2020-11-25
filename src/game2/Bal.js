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

    const [height, setHeight] = useState('wrapper')
    const [display, setDisplay] = useState(true)


    const remove = () => {
        del(el.id)
    }

    // const lift = (n) => {
    //     setHeight(n)
    //     if(n === 0){
    //
    //         remove()
    //     }
    // }

    //     let interval
    // const delay = () => {
    //     if(!!display){
    //         interval = setTimeout(() => {
    //             for (let i = 0; i <= 600; i++) {
    //                 setTimeout(() => {
    //                     lift(600 - i)
    //                 }, i * 5)
    //             }
    //         }, 1000 * i)
    //     }else clearTimeout(interval)
    // }


    useEffect(() => {
        setTimeout(()=>{
            setHeight('wrapper up')
        }, 1000 * i)
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
                style={{left: `${el.left}px`}}
                className={height}
                id={el.id}
            >
                <div className='balloon'>
                    <h1>
                        {el.value.toUpperCase()}
                    </h1>
                </div>
            </div>
            }
        </>

    )
}

export default Bal;
