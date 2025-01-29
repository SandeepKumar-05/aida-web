// src/Component/Faculty.js
import React from 'react';
import Card from './Card';
import './Faculty.css';
import contents from './content'; 
import Header from './Header';

function Faculty() {
  return (
    <>
    <Header />
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
    </>
  );
}

export default Faculty;