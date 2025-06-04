// src/Component/Faculty.js
import React from 'react';
import Card from './Card';
import './Faculty.css';
// import FacultyData from './FacultyData';
import Header from './Header';
import Footer from './Footer';


var FacultyData = [];

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://auveomwkabcqpfdiqzjs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1dmVvbXdrYWJjcXBmZGlxempzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2OTQ4NDYsImV4cCI6MjA2NDI3MDg0Nn0.11wQUUq9rMVQBiJrjKHwXR5tqHNqdG9mUwfMVR4KYBk';
const supabase = createClient(supabaseUrl, supabaseKey);

const { data: fetchedData, error } = await supabase
.from('facultydata')
.select('*')
.order('id', { ascending: true });
if (error) {
console.error(error);
} else {
console.log(fetchedData);
FacultyData = fetchedData;
}

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
          link={content.link}
          />
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Faculty;