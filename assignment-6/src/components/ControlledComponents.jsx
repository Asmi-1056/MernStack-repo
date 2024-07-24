// Asmi Purarkar 

// Assignment 6 >> 2nd Question

import React, { useState } from 'react';

const ControlledComponents = () => {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [acceptterms, setAcceptTerms] = useState(false);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


  const handleCheckboxChange = (event) => {
    setAcceptTerms(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log({
      name,
      message,
      acceptterms,
    });
  };

  return (
    <div>
      <h1>Basic Form</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '20', padding: '50px', backgroundColor: '#1669', borderRadius: '5px',textAlign:'left'}}>

        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '1em', fontWeight: 'bold' }}>Name:</label>
          <input id="name" type="text" value={name} onChange={handleNameChange} placeholder="Enter name"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px' }}/>
        </div>

        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '1em', fontWeight: 'bold' }}>Message:</label>
          <textarea id="message" value={message} onChange={handleMessageChange} placeholder="Enter message" rows="5"
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px' }}/>
        </div>


        <div style={{ marginBottom: '1em' }}>
          <label>
            <input type="checkbox" checked={acceptterms} onChange={handleCheckboxChange}/>
            I accept all the terms and conditions
          </label>
        </div>


        <button
          type="submit"
          style={{ padding: '10px 10px', borderRadius: '50px', border: 'black', backgroundColor: 'green', color: 'white' }}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ControlledComponents;
