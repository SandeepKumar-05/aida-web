// src/Cards/Card.js
import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="cards">
      <div className="profilePic">
        <img src={props.img} alt="Profile" />
      </div>
      <div className='Text'>
        <h4>HELLO HELLO HELLO HELLO</h4> {/* Use 'name' instead of 'Name' to match props */}
        <h6>hi there nice to meet you</h6> {/* Use 'position' instead of 'Position' to match props */}
      </div>
    </div>
  );
}

export default Card;