// Assignment 9

// 2nd question ---->> Props Destructuring

// UserCard.jsx file

import React from 'react'; 
const UserCard = ({ username, email, age }) => {
  return (
    <div>
      <h2>User Name: {username}</h2>
      <p>User E-mail: {email}</p>
      <p>User Age: {age}</p>
    </div>
  );
};

export default UserCard; 
