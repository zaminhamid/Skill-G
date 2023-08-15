import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import pen from '../../assets/pen.png'; 

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Find Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">  <h3>Central Office:
        Near Shayam Park Delhi</h3> </p>
       
       
      </div>

      <div className="app__aboutus-content_knife flex__center">
      
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> <h3> An Nit Skkims Startup </h3> </p>
       
      </div>
    </div>
  </div>
);

export default AboutUs;
