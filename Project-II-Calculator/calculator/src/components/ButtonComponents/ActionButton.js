import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className={`action-button ${props.bgColor} ${props.buttonWidth}`}>{props.text}</div>
    )

    

};

ActionButton.defaultProps = {
  buttonWidth: "one-wide",
  bgColor: "red"
};

export default ActionButton