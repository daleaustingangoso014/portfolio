import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo ' onClick={closeMobileMenu}>
          <img src={process.env.PUBLIC_URL + '/images/portfolio-logo-website.png'} alt="dale" />

          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
           
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='btn_nav home_link nav-links'>
                Home
              </Link> 
              
            </li>
            <li className='nav-item'>
            <Link to='/' className='btn_nav skills_link nav-links'>
                Skills
              </Link>
            </li>

            
            {/* <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={() => window.location.replace("/#testimonials")}>
                Testimonials
              </Link>
            </li> */}
             
             {/*            
            <button class="btn_nav projects_link">Projects</button>
            <button class="btn_nav skills_link">Skills</button>
            <button class="btn_nav home_link">Home</button>
            <button class="btn_nav about_link">About</button>
            <button class="btn_nav contact_link">Contact</button> 
            */}
          </ul> 

        </div>
      </nav>
    </>
  );
}

export default Navbar;