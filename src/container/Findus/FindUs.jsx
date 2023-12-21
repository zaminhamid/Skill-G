import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
     {/* <SubHeading title="Contact" />*/}
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>About Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"style={{ color: 'pink', margin: '2rem 0' }}> we're a visionary force driving the future of learning through a unique blend of online and offline experiences  </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Our Vision</p>
        <p className="p__opensans" style={{ color: 'pink', margin: '2rem 0' }}>  At Skill-G , we're not just another startup in the education and technology realm – we're a visionary force driving the future of learning through a unique blend of online and offline experiences. Our mission is to cultivate curiosity and passion for robotics and emerging technologies among students of all ages</p>
      
    
      
      </div>
    
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
