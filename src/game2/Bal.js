import React, {useState,  useEffect} from 'react';



    const charArray = "abcdefghijklmnopqrstuvwxyz".split('')
    const randomFromArray = (arr) => {
        let index = Math.floor(Math.random() * arr.length )
        return arr[index]
    }

const Bal = (props) => {

    const { el, pop, wrong, i } = props;
    console.log(el)

    const [height, setHeight] = useState('balloon color')
    // const [value, setValue] = useState(randomFromArray(charArray))
    // const [boom, setBoom] =useState(false)
    //
    useEffect(()=>{
        setTimeout(()=>{
            setHeight('balloon color up')
        }, 1000 * i)
        }
    )
    //
    //
    // const playPop = () => {
    //     let isPlaying = pop.currentTime > 0 && !pop.paused && !pop.ended
    //         && pop.readyState > 2;
    //     if(!isPlaying) pop.play();
    // }
    //
    //
    // window.addEventListener('keydown', (event) => {
    //     if(event.key === value) {
    //         console.log(event.key)
    //         playPop()
    //         setBoom(true)
    //     } else wrong.play()
    // });


    return (
        <div
             style={{left: `${el.left}px`}}
             className={height}
             >
            {/*// {boom*/}
            {/*//     ? <div className='explosion'> </div>*/}
            {/*//     :*/}
            <h1>{el.value.toUpperCase()}</h1>
        </div>

    )
}

export default Bal;
