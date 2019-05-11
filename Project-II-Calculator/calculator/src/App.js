import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';



const App = () => {
  return (
    <div className="calc-box">
      <CalculatorDisplay />
      <ActionButton bgColor="white" buttonWidth="three-wide" text="clear" />
      <ActionButton text="÷" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <ActionButton text="×" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <ActionButton text="-" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <ActionButton text="+" />
      <NumberButton buttonWidth="three-wide" text="0" />
      <ActionButton bgColor="red" text="=" />
    </div>

    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>
  );

   NumberButton.defaultProps = {
     bgColor: "white",
     buttonWidth: "one-wide"
   };

};

export default App;
