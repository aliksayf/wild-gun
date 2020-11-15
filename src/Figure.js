import React, {useEffect, useState} from "react";
import image from './svg/camouflage.png'

function Figure(props) {

    const { pong, hittedTarget} = props;

    const [red, setRed] = useState('');
    const [style, setStyle] = useState({
        top: props.el.top,
        left: props.el.left,
        position: 'absolute',
        transform: 'rotateX(90deg)',
        transition: 'transform .5s',
    });
    const figureUp = () => {
        const newStyle = {...style}
        setStyle({
            ...newStyle,
            transform: 'rotateX(0deg)',
            transformOrigin: 'bottom',
        })
    }

    const figureDown = () => {
        const newStyle = {...style}
        setStyle({
            ...newStyle,
            transform: 'rotateX(90deg)',
            transformOrigin: 'bottom',
        })
    }

    useEffect(() => {

        setTimeout(() => {
            figureUp()
        }, 200)

        setRed('palegoldenrod')

        setTimeout(() => {
            figureDown()
        }, 2500)

    }, [])

    const shoot = () => {
        setTimeout(() => {
            pong.pause();
            pong.currentTime = 0;
            pong.play();
            setRed('red')
        }, 150)

        hittedTarget();

        setStyle({
            ...style,
            transform: 'rotateX(87deg)',
            transformOrigin: 'bottom',
        })
    }

    return (
        <>
            {red && <svg
                style={style}
                width="56" height="125" viewBox="0 0 57 126" xmlns="http://www.w3.org/2000/svg">
                <path
                    // className={`${red}`}
                    onPointerDown={shoot}
                    fill={`${red}`}
                    stroke="saddlebrown" strokeWidth="0.5"
                    d="M44.5571 29C46.7284 26.017 48 22.3994 48 18.5C48 8.28273 39.2696 0 28.5 0C17.7304 0 9 8.28273 9 18.5C9 22.3994 10.2716 26.017 12.4429 29H10C4.47715 29 0 33.4771 0 39L7 116C7 121.523 11.4771 126 17 126H38C43.5229 126 48 121.523 48 116L57 39C57 33.4771 52.5229 29 47 29H44.5571Z"/>
            </svg>}
        </>
    )
}

export default Figure;
