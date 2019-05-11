import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`number-button ${props.bgColor} ${props.buttonStyle}`}>{props.text}</button>
    );
};

 NumberButton.defaultProps = {
   bgColor: "white",
 };

export default NumberButton