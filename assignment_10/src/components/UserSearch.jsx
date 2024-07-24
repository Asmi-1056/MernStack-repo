// Assignment 10

// 3rd question ---->> useState and useEffect Together

// UserSearch.jsx file

import React, { useState, useEffect } from 'react';

const UserSearch = () => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (query) {
        try {
          const response = await fetch(`https://api.github.com/users/${query}`);
          if (response.ok) {
            const data = await response.json();
            setUser(data);
          } else {
            setUser(null);
          }
        } catch (error) {
          console.error('Error while fetching the user data:', error);
          setUser();
        }
      }
    };

    fetchUser();
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Github User"
        value={query}
        onChange={handleInputChange}
      />
      {user && (
        <div>
          <h2>{user.name}</h2>
          <img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
        </div>
      )}
    </div>
  );
};

export default UserSearch;