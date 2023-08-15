import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import image from '../../assets/assian.jpg'; 
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
     
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Team" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"> we are driven by a passion for innovation and a vision of empowering individuals to master the world of robotics. Our journey began with the recognition that robotics is not just a field of technology, but a gateway to creativity, problem-solving, and limitless possibilities..</p>
        </div>
        <p className="p__opensans">  </p>
      </div>

      <div className="app__chef-sign">
        <p>TEAM</p>
        <p className="p__opensans"> Autul Dubey ,Zamin Hamid,Omkar Singh</p>
        
      </div>
    </div>
  </div>
);

export default Chef;
