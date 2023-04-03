import React from 'react';
import '../App.css';

import { Button } from './Button';
import './HeroSection.css';
 
function HeroSection() {
  
  var text = "<h1>";
  var text2 = "</h1>";
  
  var texthtml = "<html>";
  var texthtml2 = "</html>";
  
  var textpara = "<p>";
  var textpara2 = "</p>";

  var textbody = "<body>";
  var textbody2 = "</body>";

 
  return (
    
    <div className='hero-container'>
      <div id="particles-js"></div>
      <div className='hero-wrapper'>
      
      <div className='hero-description column-inner'>
      <div className='html-start custom-color-banner-codehide' data-aos="fade-right" data-aos-delay='1000'>{texthtml}</div>
      <div className='body-adjust' data-aos="fade-right" data-aos-delay='1500'>
      <div className='html-start custom-color-banner-codehide' data-aos="fade-right" data-aos-delay='2500'>{textbody}</div>
      <div><span><div id="h-heading" class="h-heading-main">{text}</div></span></div><h1 className='description-intro' data-aos="fade-right" data-aos-delay='3500'>Hi there! I'm <span className="header-intro-name">Dale Austin</span></h1><div></div><div><span><div id="h-heading" class="h-heading-main">{text2}</div></span></div>
      <p  className='description-descript' data-aos="fade-right" data-aos-delay='4500'><span className='custom-color-banner-codehide'>{textpara}</span> Front end / Oxygen Developer <span className='custom-color-banner-codehide'>{textpara2}</span></p> 
      {/* <p className='description-title' data-aos="fade-right">A Web Developer</p> */}
      <div className='hero-btns' data-aos="fade-right" data-aos-delay='5500'>
      <div class="dg-pf-banner-start-button">
                            <a href="#skills">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Get Started
                            </a>
                        </div>
      </div>
      <div className='html-start custom-color-banner-codehide' data-aos="fade-right" data-aos-delay='6500'>{textbody2}</div>   
      </div>
      <div className='html-end custom-color-banner-codehide' data-aos="fade-right" data-aos-delay='7500'>{texthtml2}</div>
      </div>
      <div className='hero-image column-inner test testgi'>
      
        <div className="hero-graphico" >
          <div className="hero-graphico-bottom">
          <img src={process.env.PUBLIC_URL + '/images/avatar2-BG.png'} alt="dale" />
          </div>
        </div>

      </div>
      </div> 
    </div>   

    
  );
}

export default HeroSection;
