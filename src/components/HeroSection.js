import React from 'react';
import '../App.css';

import { Button } from './Button';
import './HeroSection.css';
 
function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-wrapper'>
      <div className='hero-description'>
      <p className='description-intro' data-aos="fade-right">Hi there! I'm</p>
      <h1 className='' data-aos="fade-up">Dale Austin Gangoso</h1>
      <p className='description-title' data-aos="fade-right">A Web Developer</p>
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
      <div className='hero-image'>
      <div class="hero-graphico" data-aos="zoom-in-up">
      <img src={process.env.PUBLIC_URL + '/images/avatar2.png'} alt="dale" />
      </div>
      </div>
      </div> 
    </div>   
  );
}

export default HeroSection;
