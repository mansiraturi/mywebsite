import React from 'react';
import './Project.css';
import proj1 from './image/profile.jpg';
import proj2 from './image/leaves.jpg';
import proj3 from './image/food.jpg';
import proj4 from './image/book.jpg';
import proj5 from './image/malware.jpg';
import proj6 from './image/iot.jpg';

export default function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
            <h1 className="heading"> My Projects </h1>     
        </div>
        <div className="container">
            <div className="row">
                <div className="col__4">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={proj1} alt="" className="project__img"/>
                            </div>
                                <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text"> Personal Portfolio</h5>
                        <h4 className="project__text"> A personal portfolio website created using React JS </h4>
                        <a href="#Home" className="project__btn"> View Project</a>
                        </div>
                    </div>
                </div>

                <div className="col__4">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={proj2} alt="" className="project__img"/>
                            </div>
                                <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text"> Fake News Detection</h5>
                        <h4 className="project__text"> Detection of Fake news using models like linear regression, decision tree and SVM and then comparing the efficiency.</h4>
                        <a href="https://github.com/mansiraturi/LeafDisease" target="_blank" rel="noreferrer" className="project__btn"> View Project</a>
                        </div>
                    </div>
                </div>

                <div className="col__4">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={proj3} alt="" className="project__img"/>
                            </div>
                                <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text"> Manger</h5>
                        <h4 className="project__text"> A user-friendly food ordering web application that hopes to provide food to users based on the popularity and cost of items </h4>
                        <a href="https://github.com/mansiraturi/MANGER" target="_blank" rel="noreferrer" className="project__btn"> View Project</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">

                <div className="col__4">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={proj4} alt="" className="project__img"/>
                            </div>
                                <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text"> BookBea</h5>
                        <h4 className="project__text"> A web-based book application for book lovers to connect with others and exchange books through the platform built using MongoDB and Nodejs </h4>
                        <a href="https://github.com/mansiraturi/BookBea" target="_blank" rel="noreferrer" className="project__btn"> View Project</a>
                        </div>
                    </div>
                </div>

                <div className="col__4">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={proj5} alt="" className="project__img"/>
                            </div>
                                <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text"> Malware Detection</h5>
                        <h4 className="project__text">A mini project on google colab for detection and classification of malware</h4>
                        <a href="https://github.com/mansiraturi/MalwareDetection" target="_blank" rel="noreferrer" className="project__btn"> View Project</a>
                        </div>
                    </div>
                </div>

                <div className="col__4">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={proj6} alt="" className="project__img"/>
                            </div>
                                <div className="mask__effect"></div>
                        </div>
                        <div className="project__meta absolute">
                        <h5 className="project__text"> Knock Detection </h5>
                        <h4 className="project__text"> A Hardware project based on detection of knocks to ulock door integrated with sanitizer dispenser </h4>
                        <a href="https://github.com/mansiraturi/KnockDetection" target="_blank" rel="noreferrer" className="project__btn"> View Project</a>
                        </div>
                    </div>
                </div>

            </div>
        </div> 
    </div>     
    
  )
}
