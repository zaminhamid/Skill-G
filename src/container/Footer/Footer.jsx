import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram,FiLinkedin } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';





const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Atul02dubey07@gmail.com</p>
         <p className="p__opensans">xaminhamid@gmail.com</p>
        <p className="p__opensans">+91-8972247091</p>
       
        <p> </p>
      </div>

      <div className="app__footer-links_logo">
      <p> </p>
        <p className="p__opensans">&quot;Our Vision: Bridging the Gap between Online and Offline Learning"</p>
        <p className="p__opensans">&quot; Click Above to Register for online classes "</p>
        
        
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        
        <div className="app__footer-links_icons">
        
         <a href="https://www.instagram.com/skill_g__/" target="_blank" rel="noopener noreferrer">
        <FiInstagram />
      </a>
      
      <a href="https://www.linkedin.com/company/skill-g/" target="_blank" rel="noopener noreferrer">
        <FiLinkedin/>
      </a>
         
       
       
         
          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Skill-G. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
