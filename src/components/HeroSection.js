import React from 'react';
import '../App.css';

import { Button } from './Button';
import './HeroSection.css';
 
function HeroSection() {
  return (
    
    <div className='hero-container'>
      <div className='hero-wrapper'>
      <div className='hero-description column-inner'>
      <p className='description-intro' data-aos="fade-right">Hi there! I'm <span className="header-intro-name">Dale Austin</span></p>
      <p  className='description-descript'>A skilled web developer with a passion for creating intuitive and visually stunning websites. With a strong foundation in HTML, CSS, JavaScript, and various web development frameworks, I bring a wealth of technical expertise to each project. My goal is to deliver high-quality, responsive websites that meet the unique needs and goals of my clients. Whether you're looking for a personal blog, an e-commerce platform, or a custom web application, I am ready to bring your vision to life.</p> 
      {/* <p className='description-title' data-aos="fade-right">A Web Developer</p> */}
      <div className='hero-btns'>
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
      </div>
      <div className='hero-image column-inner'>
      
        <div className="hero-graphico" >
          <div className="hero-graphico-bottom">
          <img src={process.env.PUBLIC_URL + '/images/avatar2.png'} alt="dale" />
          </div>
        </div>

      </div>
      </div> 
    </div>   
  );
}

export default HeroSection;
