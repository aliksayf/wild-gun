import React, {useState,  useEffect} from 'react';
import expl from '../image/explosion.svg';


    const charArray = "abcdefghijklmnopqrstuvwxyz[];',./".split('')
    const randomFromArray = (arr) => {
        let index = Math.floor(Math.random() * arr.length )
        return arr[index]
    }

const Bal = (props) => {

    const { el, pop } = props;

    const [height, setHeight] = useState('balloon')
    const [value, setValue] = useState(randomFromArray(charArray))
    const [boom, setBoom] =useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setHeight('balloon up')
        }, 500)
        }
    )

    const playPop = () => {
        let isPlaying = pop.currentTime > 0 && !pop.paused && !pop.ended
            && pop.readyState > 2;
        if(!isPlaying) pop.play();
    }


    window.addEventListener('keydown', (event) => {
        if(event.key === value) {
            console.log(event.key)
            playPop()
            setHeight('balloon up explosion')
        }
    });

    if(boom){
        return (<div className='explosion'> </div>)
    } else
    return (
        <div
            className={height}
             style={{ left: `${el}px`}}>
            <h1>{value.toUpperCase()}</h1>
        </div>

    )
}

export default Bal;
