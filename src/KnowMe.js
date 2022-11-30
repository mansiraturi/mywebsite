import React from 'react';
import './KnowMe.css';
import {FaGraduationCap} from 'react-icons/fa'; 
import {FaRegHeart} from 'react-icons/fa';
import {FaUsersCog} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';



function KnowMe() {
  return (
    <div className="service component__space" id="KnowMe">
        <div className="heading">
            <h1 className="heading">Know More About Me   </h1>     
        </div>
        <div className="container">
            <div className="row">
                <div className="col__2">
                <div className="service__box pointer">
                    
                    <div className="service__meta">
                        <h1 className="service__text"> 
                        <FaUser size='3rem'/> <br/> <br/> Background   </h1>
                        <br/>
                        <p className="p service__text p__color">
                            <ul>
                                <li>
                                    Born in Dehradun, India on 2nd Nov, 2000.
                                </li>
                                <li>
                                    Lived in Delhi for 8 years before moving to Pune in 2008.
                                </li>
                                <li>
                                    Represented school in zonal level table-tennis tournaments.
                                </li>
                                <li>
                                    Was a part of the prefect body of the school twice.
                                </li>
                                <li>
                                    Took part in various inter-school competitons and won accolades.
                                </li>                                                   
                                                                 
                                                                
                                
                            </ul>
                        </p>

                    </div>
                </div>

                </div>
                <div className="col__2 ">
                <div className="service__box pointer">
                    
                    <div className="service__meta"> 
                        <h1 className="service__text"><FaGraduationCap size='3rem'/><br/> <br/> Education   </h1>
                        <br/>
                        <p className="p service__text p__color">
                            
                                <span>GG International School </span> 
                                    
                                    <li className="resp"> 10th Grade CBSE </li>    
                                    <li className="resp"> Grade: 10CGPA (98%) </li> 
                                    <li className="resp"> 12th Grade CBSE </li>    
                                    <li className="resp"> Grade: 94.2%</li>  
                                    <li> <div class="float_left"> 10th Grade CBSE </div>
                                            <div class="float_right"><i> Grade: 10CGPA (98%)</i> </div>
                                    </li>                                      
                                                                      
                                    <li> <div class="float_left"> 12th Grade CBSE </div>
                                            <div class="float_right"><i> Grade: 94.2%</i> </div>
                                         </li>
                                    
                                                                   
                                
                                <span>Vellore Institute of Technology</span>
                                    <ul>
                                    <li>Bachelor of Technology- BTech, Computer Science </li>
                                    <li> <i> Grade: 9.05CGPA</i></li>
                                    </ul>
                                
                        </p>

                    </div>
                </div>

                </div>
            
        </div>
        <div className="row">
                <div className="col__2">
                <div className="service__box pointer">
                    
                    <div className="service__meta">
                        <h1 className="service__text"> <FaRegHeart size='3rem'/> <br/> <br/> Interests  </h1>
                        <br/>
                        <p className="p service__text p__color">
                            <ul>
                                <li>
                                    Learning new languages
                                </li>
                                <li>
                                    Travelling and hiking.
                                </li>
                                <li>
                                    Learning various dancing styles.
                                </li>
                                <li>
                                    Sketching and painting in the nature.
                                </li>
                                <li>
                                    Reading novels.
                                </li>
                                <li>
                                    Playing table tennis.
                                </li>
                                
                            </ul>
                        </p>

                    </div>
                </div>

                </div>
                <div className="col__2">
                <div className="service__box pointer">
                    
                    <div className="service__meta">
                        <h1 className="service__text"> <FaUsersCog size='3rem'/> <br/> <br/> Skills & tools   </h1>
                        <br/>
                        <p className="p service__text p__color">
                            <ul>
                                <li>
                                    Problem solving in C/C++, Python
                                </li>
                                <li>
                                    Frontend using React.
                                </li>
                                <li>
                                    Backend and database management.
                                </li>
                                <li>
                                    Data Analysis and visualisation.
                                </li>
                                <li>
                                    Machine learning.
                                </li>
                                <li>
                                    Illustration and UI/UX.
                                </li>
                            </ul>
                        </p>


                    </div>
                </div>

                </div>
            
        </div>
        </div>
      
    </div>
  )
}

export default KnowMe
