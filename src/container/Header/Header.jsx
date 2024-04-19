import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import imag from '../../assets/skill.png'; 
import skill from '../../assets/skill.png'; 
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Beyond Books  " />
       
      <h6 className="app__header-h1"></h6>
       <img src={skill} alt="logo" style={{ float: 'right', width: '20%', maxWidth: '150px', height: 'auto', marginLeft: '70vw' }} />
      
      
      
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
  <h1 style={{ marginTop: '1rem', color: 'white', fontSize: '28px' }}>
  
    From Components to Creations: The Robotic Odyssey 🌠 
  </h1>
  
  
  


  
   <p> </p>
  
  <p style={{ color: 'white', fontSize: '18px', lineHeight: '1.5', marginTop:'2rem' }}>
    Welcome to the world of robotics and innovation! At Skill-G, we are
    passionate about igniting the spark of creativity and curiosity in young
    minds. Our mission is to empower individuals to explore the limitless
    possibilities of robotics and technology.
  </p>
  <p style={{ color: 'white', fontSize: '18px', lineHeight: '1.5' ,marginTop:'2rem'}}>
    Whether you're a beginner or an experienced enthusiast, we offer a wide
    range of online and offline robotic courses designed to cater to all
    skill levels. Dive into the exciting world of coding, electronics,
    mechanical engineering, and more! </p>
    
  <p style={{ color: 'white', fontSize: '18px', lineHeight: '1.5',marginTop:'2rem' }}>
    Our state-of-the-art robotic kits are carefully curated to provide you with
    everything you need to build and program your robots. Get ready to bring
    your wildest ideas to life with our comprehensive kits.
  </p>
  <p style={{ color: 'white', fontSize: '18px', lineHeight: '1.5' ,marginTop:'2rem'}}>
    Join us on this incredible journey, and together, let's create the future
    of technology. Your adventure starts here at RoboTech Academy!
  </p>
  <h4 style={{ color: 'white', marginTop: '1rem' }}>Nitians and IISC Initative</h4>
  <a style={{ marginTop: '3rem' }} href="https://docs.google.com/forms/d/e/1FAIpQLSdrriLkDl3-v-nAuY6x_pBZGFgvQ28KTEAn8DCSu9Z2bXdFkg/viewform?usp=sf_link">
    <button style={{ fontSize: '18px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
      Click here to join free Webinar
    </button>
  </a>
</p>


      
  
  
  
  
  
  
  
  
  
  
  
  
    </div>
    

 

  </div>
);

export default Header;
