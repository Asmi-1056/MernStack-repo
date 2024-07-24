// Asmi Purarkar 

// Assignment 6 >> 1st Question

import React, { useState } from 'react';
import './App.css';

function BasicEventHandling() {
  const [inputValue, setInputValue] = useState('');
  const [hover, setHover] = useState(false);

  const handleButtonClicked = () => {
    console.log('Button Clicked');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const handleMouseEntered = () => {
    setHover(true);
  };

  const handleMouseLeaved = () => {
    setHover(false);
  };

  const div = {width: '400px', height: '400px', backgroundColor: hover ? 'lightblue' : 'lightpink', margin: '40px',};

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleButtonClicked}>Click</button>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type..."/>

        <div style={div}
          onMouseEnter={handleMouseEntered}
          onMouseLeave={handleMouseLeaved}>
          <h5>Hover here.</h5>
        </div>
      </header>
    </div>
  );
}
export default BasicEventHandling;