import React, {useState,  useEffect} from 'react';
import expl from '../image/explosion.svg';


    const charArray = "abcdefghijklmnopqrstuvwxyz[];',./".split('')
    const randomFromArray = (arr) => {
        let index = Math.floor(Math.random() * arr.length )
        return arr[index]
    }

const Bal = (props) => {

    const { el, pop } = props;

    const [height, setHeight] = useState('balloon color')
    const [value, setValue] = useState(randomFromArray(charArray))
    const [boom, setBoom] =useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setHeight('balloon color up')
        }, 500)
        }
    )

    const styleParam = {
        left: `${el}px`,
    }

    const playPop = () => {
        let isPlaying = pop.currentTime > 0 && !pop.paused && !pop.ended
            && pop.readyState > 2;
        if(!isPlaying) pop.play();
    }


    window.addEventListener('keydown', (event) => {
        if(event.key === value) {
            console.log(event.key)
            playPop()
            setBoom(true)
        }
    });


    if(boom){
        setTimeout(()=> {
            return <></>
        }, 300)
    }else {
    return (
        <div
            className={boom ? 'balloon pop' : height}
             style={styleParam}>
            {boom ? <div className='explosion'> </div> : <h1>{value.toUpperCase()}</h1>}
        </div>

    )}
}

export default Bal;
