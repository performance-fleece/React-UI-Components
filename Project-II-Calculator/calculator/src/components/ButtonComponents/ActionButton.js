import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={`action-button ${props.bgColor} ${props.buttonWidth}`}>{props.text}</button>
    )

    

};

ActionButton.defaultProps = {
    bgColor: 'white',
};

export default ActionButton