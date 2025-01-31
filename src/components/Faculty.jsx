// src/Component/Faculty.js
import React from 'react';
import Card from './Card';
import './Faculty.css';
import contents from './content'; 
import Header from './Header';
import Footer from './Footer';

function Faculty() {
  return (
    <>
    <Header />
    <div className='container'>
      <div className="component">
        {contents.map(content => (
          <Card
          key={content.Id}
          img={content.link} 
          name={content.Name}
          position={content.Position}
          />
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Faculty;