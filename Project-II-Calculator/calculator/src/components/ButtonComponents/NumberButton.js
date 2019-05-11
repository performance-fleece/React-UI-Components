import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className={`number-button ${props.bgColor} ${props.buttonWidth}`}>{props.text}</div>
    );
};

 NumberButton.defaultProps = {
   bgColor: "white",
   buttonWidth: "one-wide"
 };
 
export default NumberButton