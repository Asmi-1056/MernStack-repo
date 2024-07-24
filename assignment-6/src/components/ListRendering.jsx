// Asmi Purarkar 

// Assignment 6 >> 4th Question

import React, { useState } from 'react';

const ListRenderingEventHandling = () => {
  const [fruits, setfruits] = useState(['Mango', 'Apple', 'Peach', 'Pineapple', 'Watermelon']);
  const [filterfruit, setFilterFruit] = useState('');
  const [newfruit, setNewfruit] = useState('');

  const handleFilterChange = (event) => {
    setFilterFruit(event.target.value);
  };

  const handleNewfruitChange = (event) => {
    setNewfruit(event.target.value);
  };

  const handleAddfruit = () => {
    if (newfruit.trim()) {
      setfruits([...fruits, newfruit]);
      setNewfruit(''); 
    }
  };

  const filteredfruits = fruits.filter(fruit =>
    fruit.toLowerCase().includes(filterfruit.toLowerCase())
  );
  
  return (
    <div style={{ backgroundColor: 'skyblue', padding: '3px' }}>
        
      <h1 style={{ color: '#222' }}>List of Fruits</h1>

      <input type="text" value={filterfruit} onChange={handleFilterChange} placeholder="Search fruits..."/>

      <div>
        <input type="text" value={newfruit} onChange={handleNewfruitChange} placeholder="Add fruit..."/>
        <button onClick={handleAddfruit}>Add fruit</button>
      </div>

      <ul>
        {filteredfruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    </div>
  );

};

export default ListRenderingEventHandling;