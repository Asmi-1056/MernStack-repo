// Assignment 10

// 1st question ---->> Basic useState Hook

// Counter.jsx file

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const containerStyle = {textAlign: 'center', marginTop: '20px'};

  const headingStyle = {fontSize: '30px'};

  const paragraphStyle = {fontSize: '20px'};

  const buttonStyle = {
    fontSize: '20px',
    margin: '7px',
    padding: '7px 14px',
    cursor: 'pointer',
    backgroundColor: 'yellowgreen',
    color: 'black',
    border: 'none',
    borderRadius: '10px'};

  const buttonHoverStyle = {backgroundColor: 'lightgreen'};

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Counter</h1>
      <p style={paragraphStyle}>{count}</p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;