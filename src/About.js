import React from 'react';
import './About.css';
import aboutImg from './image/aboutme.jpeg';

function About() {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
            <div className="col__2">
                <img src={aboutImg} alt="" className="about__img"/>
            </div>
            <div className="col__2">
                <h1 className="about__heading">
                    About Me
                </h1>
                <br/>
                <div className="about__meta">
                    <p className="about__text p__color">
                    While growing up, I always believed the world to be a 'wish-granting factory'. 
                    But eventually as time flew by, I realised we are a part of a world with never-ending problems. 
                    However, technology is one such thing that has given me hope throughout my life. I believe that technology can make this world a better place to live in.
                    </p>
                    <p className="about__text p__color">
                    As a computer science engineer, I’ve got a vast exposure to latest technologies and tools that have shaped the world with hands-on experience in labs. 
                    Developing machine learning models for predictions, data analysis and visualisation have been some areas of my interest ever since I began my undergraduate journey.  
                    I am passionate about technology and I aspire to become a part of the burgeoning community and contribute my very bit to the society. 
                    </p>
                </div>   
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
