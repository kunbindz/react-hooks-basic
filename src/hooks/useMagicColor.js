import React, { useEffect, useState, useRef } from 'react';

function randomColor(currentColor) {

    const COLOR_LIST = ['red', 'green', 'blue', 'black', 'white', 'yellow'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 6);
    }

    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    useEffect(() => {
        const colorInterval = setInterval(() => {
            // console.log("color", color);
            //console.log('change color: ', colorRed.current);
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000);
        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;