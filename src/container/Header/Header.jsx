import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import imag from '../../assets/ai.jpg'; 

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Beyond Books  " />
      <h6 className="app__header-h1">Oddessy of the genius</h6>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>From Components to Creations: The Robotic Odyssey 🌠
      We Provide online/offline Robotic Courses,Robotic Kit and Much More </p>
      
    </div>

    <div className="app__wrapper_img">
      <img src={imag} alt="header_img" />
    </div>
  </div>
);

export default Header;
