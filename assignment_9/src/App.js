// Assignment 9

// app.js file

import React from 'react';

// 1st question ---->> Basic Props
import Greeting from './components/Greeting'; 
const App = () => {
  return (
    <div>
      <Greeting name="Sonal" />
      <Greeting name="Shaurya" />
      <Greeting name="Omkar" />
      <Greeting name="Vruddhi" />
      <Greeting name="Rohini" />
    </div>
  );
};

export default App; 


// 2nd question ---->> Props Destructuring
import UserCard from './components/UserCard'; 
const App = () => {
  return (
    <div>
      <UserCard username="Omkar" email="omkar@gmail.com" age="28" />
      <UserCard username="Rohini" email="rohini@gmail.com" age="20" />
      <UserCard username="Sonal" email="sonal@gmail.com" age="30" />
      <UserCard username="Shaurya" email="shaurya@gmail.com" age="18" />
      <UserCard username="Sonal" email="swapnil@gmail.com" age="35" />
    </div>
  );
};
 export default App; 


// 3rd question ---->> Nested Destructuring
import Profile from './components/Profile'; 

const App = () => {
  const user = {
    name: 'Asmi Purarkar', 
    email: 'asmi@gmail.com',
    address: {
      street: '28 Main Street', 
      city: 'Pune', 
      country: 'India' ,
    }
  };
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
export default App; 


// 4th question ---->> Default Props
import Button from './components/Button'; 
const App = () => {
  return (
    <div>
      <Button label="Submit" />
      <Button />
    </div>
  );
};
export default App; 

