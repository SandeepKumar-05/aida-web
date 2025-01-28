import React from 'react'
import './Certificate.css'
function Certificate() {
  return (
      <div className="container">
        <div className="img_mainText">
           <img src={process.env.PUBLIC_URL +'/chatbot.png'} alt="img" />
            <h2>Verify Your Certificates Here!|</h2>
        </div>

           <div className="input_field">
              <input type="number" placeholder='Enter Certificate Number '/>
              <button>Verify</button>
           </div>
       
      </div>
    
  )
}

export default Certificate
