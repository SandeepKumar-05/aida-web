// src/Component/Faculty.js
import React from 'react';
import Card from './Card';
import './Faculty.css';
import FacultyData from './FacultyData';
import Header from './Header';
import Footer from './Footer';

function Faculty() {
  return (
    <>
    <Header />
    <div className='container'>
      <div className="component">
        {FacultyData.map(content => (
          <Card
          key={content.Id}
          img={content.pic} 
          name={content.name}
          position={content.designation}
          />
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Faculty;