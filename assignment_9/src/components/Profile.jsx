// Assignment 9

// 3rd question ---->> Nested Destructuring

// UserCard.jsx file

import React from 'react'; 
const Profile = ({ 
  user: { 
    name, 
    email, 
    address: { 
      street, 
      city, 
      country 
    } 
  } 
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>     
      <div>
        <h3>Address:</h3>
        <p>Street: {street}</p>
        <p>City: {city}</p>
        <p>Country: {country}</p>
      </div>
    </div>
  );
};

export default Profile;

