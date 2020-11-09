import React, { useState } from 'react';
import './ColorBox.scss';
ColorBox.propTypes = {

};
function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {


    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'black';
        console.log(initColor);
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);


    }
    return (
        <div className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick} >
            <h4>DEMO HIHI</h4>
        </div>
    );
}

export default ColorBox;