// src/Component/Faculty.js
import React from 'react';
import Card from '../Cards/Card';
import './Faculty.css';
import contents from '../content'; 

function Faculty() {
  return (
    <div className='container'>
      <div className="component">
        {contents.map(content => (
          <Card
            key={content.Id}
            img={content.Img} 
            name={content.Name}
            position={content.Position}
          />
        ))}
      </div>
    </div>
  );
}

export default Faculty;