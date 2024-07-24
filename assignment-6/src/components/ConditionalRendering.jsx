// Asmi Purarkar 

// Assignment 6 >> 3rd Question

import React, { useState } from 'react';

const ToggleParagraph = () => {
  const [isVisible, setisVisible] = useState(false);

  const toggleVisibility = () => {
    setisVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '70px'}}>
      <button
        onClick={toggleVisibility}
        style={{padding: '10px 10px', fontSize: '16px', borderRadius: '5px', backgroundColor: 'Green', color: 'black', border: '10px black'}}>
        {isVisible ? 'Hide Paragraph' : 'Display Paragraph'}
      </button>
      {isVisible && (
        <p style={{ marginTop: '50px', fontSize: '20px', color: 'Black',backgroundColor: 'skyblue'  }}>
        Magna qui fugiat nisi eu excepteur mollit aliquip adipisicing. Nulla laboris ad laboris cupidatat mollit ipsum reprehenderit minim est. Do sunt velit velit enim laborum et consequat excepteur. Id aute minim velit consectetur id cillum laboris laboris excepteur in ea adipisicing veniam dolore. Laboris deserunt laboris laborum fugiat laboris excepteur non velit laboris. Deserunt esse velit consequat aliquip quis aute Lorem.
        Eiusmod elit quis pariatur labore veniam est exercitation eu fugiat aute est aliquip cupidatat qui. Sunt pariatur consectetur aliqua voluptate Lorem esse cupidatat non tempor do mollit quis pariatur dolore. Occaecat voluptate nisi culpa incididunt. Adipisicing deserunt dolor magna enim adipisicing sit qui in culpa laboris sit exercitation.
        Cillum reprehenderit officia occaecat commodo elit amet dolore ad. Nulla ea amet elit duis id sit magna et eu ad. Veniam do aliquip ad tempor fugiat eiusmod incididunt consequat ea deserunt irure. Lorem sit consequat et ex commodo culpa. Magna fugiat anim exercitation consectetur proident deserunt non. Commodo cillum do in Lorem ea exercitation Lorem eu nisi fugiat officia qui voluptate. Dolor adipisicing fugiat commodo in irure.
        </p>
      )}
    </div>
  );
};

export default ToggleParagraph;
