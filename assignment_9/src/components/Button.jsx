// Assignment 9

// 4th question ---->> Default Props

// Button.jsx file

import React from 'react'; 
const Button = ({ label = "Click Me" }) => {
  return (
    <button>{label}</button>
  );
};

export default Button; 
