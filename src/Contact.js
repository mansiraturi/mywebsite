import React from 'react';
import './Contact.css';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

function Contact() {
  return (
    <div className="footer_connect" id="Contact">
        <div className="container">    

        <p className="footer_text">
            
            Connect with me 
        </p>
        <br/>
        <div className="icons">
            <a href="https://www.facebook.com/mansi.raturi0211/" target="_blank" rel="noreferrer"><FaGoogle size='2.25rem' color="white"/> </a>
            <a href="https://www.instagram.com/mansyraturi/?hl=en" target="_blank" rel="noreferrer"> <FaInstagram size='2.25rem' color="white"/> </a>
            <a href="https://www.linkedin.com/in/mansi-raturi-25264b206/" target="_blank" rel="noreferrer"><FaLinkedinIn size='2.25rem' color="white"/> </a>            
            <a href="https://www.facebook.com/mansi.raturi0211/" target="_blank" rel="noreferrer"> <FaFacebookF size='2.25rem' color="white"/> </a>
            <a href="https://github.com/mansiraturi" target="_blank" rel="noreferrer"> <FaGithub size='2.25rem' color="white"/> </a>
            
        </div>
        <div className="info_footer">
            <br/>
            <p className="info">+91 7559372496</p> 
            <p className="info">mansi.r0211@gmail.com</p>
            <p className="info">Ahmedabad, India</p>

        </div>
        </div>
      
    </div>
  )
}

export default Contact
