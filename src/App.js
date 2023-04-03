import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import "aos/dist/aos.css";
import {BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

function App() {

  
  useEffect(() => {
    AOS.init();
   
  }, []);
  return (
    
   <>

   
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js" integrity="sha512-jq8sZI0I9Og0nnZ+CfJRnUzNSDKxr/5Bvha5bn7AHzTnRyxUfpUArMzfH++mwE/hb2efOo1gCAgI+1RMzf8F7g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script>var stylesheet = "https://app.testdome.com/content/source/stylesheets/embed.css", link = document.createElement("link"); link.href = stylesheet, link.type = "text/css", link.rel = "stylesheet", link.media = "screen,print", document.getElementsByTagName("head")[0].appendChild(link);</script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
   <Router>
      <div className="app">
        
      <HeroSection />
      <SkillsSection />
      
      {/* <div className="row">
      <div className="page-navigation column">
      
      
     
      </div>
      <div className="page-content column"> */}
      

      {/* <HeroSection /> */}
      {/* <SkillsSection /> */}
      
{/* Page Transition - Start */}
{/* <Navbar /> */}


{/* <div class="page__style projects">
  <div class="page__description">
    <div id="projects">

    

    </div>
  </div>
</div>

<div class="page__style skills">
  <div class="page__description">
    <div id="skills">
      
    

    </div>
  </div>
</div>


<div class="page__style about">
  <div class="page__description">
    <div id="about">
      <h1>About</h1>

      <button class="btn_nav projects_link">Projects</button>
      <button class="btn_nav skills_link">Skills</button>
      <button class="btn_nav home_link">Home</button>
      <button class="btn_nav about_link">About</button>
      <button class="btn_nav contact_link">Contact</button>

      <p>Thanks <a href="https://codyhouse.co/gem/animated-page-transition/" target="_blank">codyhouse.co</a></p>

    </div>
  </div>
</div>

<div class="page__style contact">
  <div class="page__description">
    <div id="contact">
      <h1>Contact</h1>

      <button class="btn_nav projects_link">Projects</button>
      <button class="btn_nav skills_link">Skills</button>
      <button class="btn_nav home_link">Home</button>
      <button class="btn_nav about_link">About</button>
      <button class="btn_nav contact_link">Contact</button>

      <p>Thanks <a href="https://codyhouse.co/gem/animated-page-transition/" target="_blank">codyhouse.co</a></p>

    </div>
  </div>
</div>


<div class="page__style home">
  <div class="page__description">
    <div id="home main-renderer-window" >

    <HeroSection />
    
    <SkillsSection />

  
    </div>
  </div>
</div> */}

{/* Page Transition - End */}
      
     
      {/* <Footer /> */}

      {/* </div>
      </div> */}

      </div>
    </Router>
   </>
  );
}

export default App;

