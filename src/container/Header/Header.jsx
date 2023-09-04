import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import imag from '../../assets/skill-g.jpeg'; 

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Beyond Books  " />
      <h6 className="app__header-h1"></h6>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>From Components to Creations: The Robotic Odyssey 🌠
      We Provide online/offline Robotic Courses,Robotic Kit and Much More </p>
      <h4 style={{ color: 'white' ,marginTop: '1rem'}}>Nitians and IISC Initative</h4>
               <a style={{ marginTop:'1rem' }} href="https://docs.google.com/forms/d/e/1FAIpQLSdrriLkDl3-v-nAuY6x_pBZGFgvQ28KTEAn8DCSu9Z2bXdFkg/viewform?usp=sf_link">
   
     <button>Click here to join free Webinar</button>
</a>
 

      
    </div>
    

    <div className="app__wrapper_img">
    
      <img src={imag} alt="header_img" />
    </div>
    

  </div>
);

export default Header;
