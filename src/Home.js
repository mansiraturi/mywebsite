import React, {useState} from "react";
import "./Home.css";


function Home() {
  //fixed header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 0);
  });
  //TOGGLE MENU
  const [show, setShow]= useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header ">
          <div className="container_nav">
            <nav>
            <div className="logo">
          <p className="mansi">Mans<font color="#C8A2C8">i</font></p> </div>
          <div className="toggle">
            
          <div className="fas">
          <svg onClick={()=> setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-justify white"
              viewBox="0 0 10 10"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            {/* <FaBars size='3rem' color="white"/> */}
            </div>  
            {show ?(
            <ul className="navbar d__flex">                                                             
              <a href="#Home">
                <li className="nav__items mx__15"> Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15"> About</li>
              </a>
              <a href="#KnowMe">
                <li className="nav__items mx__15"> Know Me</li>
              </a>
              <a href="#Project">
                <li className="nav__items mx__15"> Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15"> Contact</li>
              </a>
             
            </ul>
            ): null}
            </div> 
            

            
            </nav> 

            
          </div>
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text">WELCOME</h1>
              <br /> <br />
              <p className="home_txt">
                "Two roads diverged in a wood, and I— I took the one less
                traveled by, And that has made all the difference"{" "}
              </p>
              <br />
              <p className="home_txt">~Robert Frost</p>
              <br />
              <br />
            </div>
            <h2 className="home__text pz__10">I am Mansi Raturi</h2> <br />
            <h3 className="home__text sweet">A tech enthusiast</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
