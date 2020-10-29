import React, {useEffect, useState} from "react";

function Figure(props) {

    const [red, setRed] = useState('grey');


    const shoot = () => {
        setRed('#ff1a1a')
        console.log('shoot')
    }

    console.log('props', props)

    return (
        <svg
            width="57" height="126" viewBox="0 0 57 126"  xmlns="http://www.w3.org/2000/svg">
            <path
                // className={`figure ${props.el.bgc} ${props.el.order} ${red}`}
                className={`${red}`}
                onPointerDown={shoot}
                fill={`${red}`}
                d="M44.5571 29C46.7284 26.017 48 22.3994 48 18.5C48 8.28273 39.2696 0 28.5 0C17.7304 0 9 8.28273 9 18.5C9 22.3994 10.2716 26.017 12.4429 29H10C4.47715 29 0 33.4771 0 39L7 116C7 121.523 11.4771 126 17 126H38C43.5229 126 48 121.523 48 116L57 39C57 33.4771 52.5229 29 47 29H44.5571Z" />
        </svg>
    )
};

export default Figure;