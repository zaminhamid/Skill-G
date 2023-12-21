import React from 'react';
import './Card.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import imag from '../../assets/ai.jpg'; 

const Card = ({ text }) => {
  return (<>
    <div className="app__heade app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Courses We Provide  " />
        <h6 className="app__heade-h1"></h6>
        <p className="p__xam" style={{ margin: '2rem 0' }}>
          <h1 style={{  marginTop: '1rem',fontFamily: 'Roboto, sans-serif' }}>Curated courses </h1>
          <h2 style={{  marginTop: '1rem',fontFamily: 'Roboto, sans-serif' }}>Embark on an Uncharted Learning Adventure: </h2>
          <h4 style={{ color: 'black', marginTop: '1rem',fontFamily: 'Roboto, sans-serif' }}>Explore our meticulously crafted courses that break free from textbooks, guiding students through a dynamic journey into the heart of modern technologies. With hands-on projects and immersive checkpoints, young minds discover and enjoy a world beyond traditional learning, equipping them with skills that shape tomorrow. </h4>
         
          
          

	<h5 style={{ color: 'black', marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <label htmlFor="browser" style={{ marginBottom: '0.5rem', fontSize: '14px' }}>Choose a Course:</label>
  <input
    list="browsers"
    name="browser"
    id="browser"
    style={{
      backgroundColor: 'white',
      fontSize: '12px',
      textAlign: 'center',
      border: '1px solid #ccc', // Add a border for better visibility
      borderRadius: '5px', // Add some border radius for a rounded look
      padding: '10px', // Increase padding for better spacing
    }}
    placeholder="Know More"
  />
  <datalist id="browsers">
    <option value="ROBOTICS"></option>
    <option value="CODING"></option>
    <option value="WEB DEVELOPMENT"></option>
  </datalist>
</h5>


          
          
          
        </p>
        
        <p className="p__xam" style={{ margin: '2rem 0' }}>
          <h1 style={{  marginTop: '1rem',fontFamily: 'Roboto, sans-serif' }}>Workshops </h1>
          <h2 style={{  marginTop: '1rem' ,fontFamily: 'Roboto, sans-serif'}}>Ignite Learning Through Immersive Workshops: </h2>
          <h4 style={{ color: 'black', marginTop: '1rem' ,fontFamily: 'Roboto, sans-serif'}}>Skill-G brings the future of education directly to campuses. Our workshops offer hands-on experiences in cutting-edge technologies, robotics, digital marketing, and more. With a vision to make practical learning affordable and accessible, we provide the tools and skills that empower students to excel and innovate
 </h4>
        </p>
        
        
        
         <p className="p__xam" style={{ margin: '2rem 0' }}>
          <h1 style={{  marginTop: '1rem' ,fontFamily: 'Roboto, sans-serif'}}>Internship </h1>
            <h2 style={{  marginTop: '1rem',fontFamily: 'Roboto, sans-serif' }}>Empowering Young Minds with Real-World Experience: </h2>
          <h4 style={{ color: 'black', marginTop: '1rem',fontFamily: 'Roboto, sans-serif' }}> Skill-G pioneers India's first internship program for school students, opening doors to practical learning, certificates, and even earnings. Our vision is to create a launchpad for budding talents, enabling them to gain valuable exposure and hands-on skills from an early age. Through internships, we're shaping the leaders of tomorrow while offering a unique opportunity to earn, learn, and thrive
 </h4>
        </p>
        
        
          <p className="p__xam" style={{ margin: '2rem 0' }}>
          <h1 style={{  marginTop: '1rem',fontFamily: 'Roboto, sans-serif' }}>Industrial Visits </h1>
           <h2 style={{  marginTop: '1rem',fontFamily: 'Roboto, sans-serif' }}>Explore Industries Up Close: </h2>
          <h4 style={{ color: 'black', marginTop: '1rem' }}> Skill-G Industrial Visits offer students a captivating journey into the heart of industries and technology. With expert guides, students get to witness real-world operations, fostering a deeper understanding of how concepts come to life. These science tours ignite curiosity and provide a hands-on glimpse into the world of innovation and production </h4>
        </p>
        
        
          
        
         
       
      </div>
      <div className="app__wrapper_img">
       
      </div>
    </div>

    
  </>);
};

export default Card;

