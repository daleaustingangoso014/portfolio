import React from 'react';
import '../App.css';
import './SkillsSection.css';
import SkillBar from 'react-skillbars'; 
import { Link } from 'react-router-dom';


function SkillsSection() {
    const skills = [

        {type: "Javascript", level: 75},
        {type: "PHP", level: 55},
        {type: "HTML", level: 75},
        {type: "CSS", level: 68},
        
        {type: "VueJs", level: 40},
        {type: "ReactJs", level: 60},
        {type: "SEO", level: 54},
      ];
    const skillstwo = [
        
        {type: "Wordpress", level: 90},
        {type: "Affiliate", level: 40},
        {type: "Wix", level: 55},
        {type: "Woocommerce", level: 45},

      ]; 
      const skillspersonal = [
        
        {type: "Communication", level: 98},
        {type: "Organizational", level: 95},
        {type: "Motivated", level: 100},
        {type: "Reliable", level: 95},

      ];
      const colors = {
        "bar": "#f6c783",
        "title": {
          "text": "#fff",
          "background": "#212536"
        }
      }  

    return (
       <>
       

       <div id="skills" className='skills-main-section-container'>
           <div className='skills-main-section-wrapper'>
           <div className='skills-main-section-inner'>
               
           <div class="container skill-blimp"  data-aos="fade-up">
           <p class="small-tag-heading">Proficiency</p>    
           <h2>Technical Skills</h2>
           <SkillBar skills={skills} colors={colors} height={25}/>
           <SkillBar skills={skillstwo} colors={colors} height={25}/>
           <h2>Personal Skills</h2>
           <SkillBar skills={skillspersonal} colors={colors} height={25}/>
       
           </div>
           
    <div className='skill-blimp-description' data-aos="fade-up" >
    <h2>About Me</h2>
    <p>
    A Web Developer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. Experience in Responsive Web Design, Developing user interface, testing, and debugging. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiency.
</p>
<p>
I am eager to obtain a challenging position at a prestigious company that will expand my learning and build upon my developer skills
</p>

<h2 className='contact-me-heading'>Contact Me:</h2>
<div className='contact-me'>Skype: <a href="mailto:daleaustingangoso014@gmail.com">daleaustingangoso014@gmail.com</a></div>
<div className='contact-me'>Telephone: <a href="tel:+639453229563">(+63) 945-322-9563</a></div>

<h2 className='contact-me-heading'>Follow or Add me on:</h2>

<div className='social-icons'>
                <a
                class='social-icon-link facebook'
                href="https://www.facebook.com/eladnitsua.gangoso/"
                target='_blank'
                rel="noopener"
                aria-label='Facebook'
              >
               <i class='fab fa-facebook-f' />
              </a>
               
               <a
                class='social-icon-link instagram'
                href="https://www.instagram.com/daleaustinkatalbas/"
                target='_blank'
                rel="noopener"
                aria-label='Instagram'
              >
               <i class='fab fa-instagram' />
              </a>
              <a
                class='social-icon-link linkedin'
                href="https://www.linkedin.com/in/dale-austin-gangoso-07b182193/"
                target='_blank'
                rel="noopener"
                aria-label='linkedin'
              >
              <i class='fab fa-linkedin' />
              </a>
               
            </div>
            <h2 className='contact-me-heading'>Certificates</h2>
     <div className="certificates-main">
       <div className="certificates-wrapper">
       <div className="certificates-item">
     <a href="https://app.testdome.com/cert/1254ec753ce74e758b722f1f84daf138" class="testdome-certificate-stamp silver"><span class="testdome-certificate-name">    
        Dale Austin K. Gangoso
    
</span><span class="testdome-certificate-test-name">PHP and WordPress </span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
       </div>
       <div className="certificates-item">
       <a href="https://app.testdome.com/cert/060da72bac824b0bae209b6975d560e1" class="testdome-certificate-stamp silver"><span class="testdome-certificate-name">    
        Dale Austin K. Gangoso
    
</span><span class="testdome-certificate-test-name">HTML/CSS </span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a><script>var stylesheet = "https://app.testdome.com/content/source/stylesheets/embed.css", link = document.createElement("link"); link.href = stylesheet, link.type = "text/css", link.rel = "stylesheet", link.media = "screen,print", document.getElementsByTagName("head")[0].appendChild(link);</script>
       </div>
       </div>
     </div>
        
</div>
    </div>
       </div> 
       </div>
       </>
  
     
    );
  }
  
  export default SkillsSection;
  