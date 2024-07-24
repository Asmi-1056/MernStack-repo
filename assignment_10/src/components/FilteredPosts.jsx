// Assignment 10

// 5th question ---->> Custom Hook with Parameters

// FilteredPosts.jsx file

import React, { useState } from 'react';
import useFetchWithParams from './useFetchWithParams'; 
function FilteredPosts() {
  const [userId, setUserId] = useState('');
  const [fetchParams, setFetchParams] = useState(null);

  const handleFetchPosts = () => {setFetchParams({ userId });};

  const { data, loading, error } = useFetchWithParams('https://jsonplaceholder.typicode.com/posts',fetchParams);

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User Id"
      />
      <button onClick={handleFetchPosts}
      style={{color:'#166'}}>Fetch Posts</button>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      <ul>
        {data && data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredPosts;
