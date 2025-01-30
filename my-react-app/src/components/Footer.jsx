import './Footer.css'
import React from 'react';
import link from './assets/linkedin.svg'
import insta from './assets/instagram.svg'
import mail from './assets/email.svg'
import pic from './assets/logo.png'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <Link to="/"><img src={pic} alt="AIDA logo" className="footer-logo" /></Link>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/company/aida-association" className="footer-link">
            <img src={link} className='link' alt="" />
          </a>
          <a href="https://www.instagram.com/aida_community" className="footer-link">
            <img className="insta" src={insta} alt="" />
          </a>
          <a href="mailto:info@aida.com" className="footer-link">
            <img className="mail" src={mail} alt="" />
          </a>
        </div>
        </div>
        <div className='line'>
      </div>
      <div className='footer-content'>
        <div className="footer-left">
          <p className="footer-text">Jyothi Hills, Panjal Rd, Vettikattiri, Cheruthuruthi, 679531,Kerala, India</p>
        </div>
      </div>
      <p className='end-content'>AIDA Community | Copyright © 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;