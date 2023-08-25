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
          <h1 style={{  marginTop: '1rem' }}>Curated courses </h1>
          <h2 style={{  marginTop: '1rem' }}>Embark on an Uncharted Learning Adventure: </h2>
          <h4 style={{ color: 'black', marginTop: '1rem' }}>Explore our meticulously crafted courses that break free from textbooks, guiding students through a dynamic journey into the heart of modern technologies. With hands-on projects and immersive checkpoints, young minds discover and enjoy a world beyond traditional learning, equipping them with skills that shape tomorrow. </h4>
         
          
          

	<h4 style={{ color: 'black', marginTop: '1rem' }}>

    <input
  list="browsers"
  name="browser"
  id="browser"
  style={{  backgroundColor: 'white' , fontSize: '18px',
    textAlign: 'center',}}
  placeholder="Know More"
/>
<datalist id="browsers">
  <option value="ROBOTICS"></option>
  <option value="CODING"></option>
  <option value="WEB DEVELOPMENT"></option>
</datalist>


</h4>

          
          
          
        </p>
        
        <p className="p__xam" style={{ margin: '2rem 0' }}>
          <h1 style={{  marginTop: '1rem' }}>Workshops </h1>
          <h2 style={{  marginTop: '1rem' }}>Ignite Learning Through Immersive Workshops: </h2>
          <h4 style={{ color: 'black', marginTop: '1rem' }}>Skill-G brings the future of education directly to campuses. Our workshops offer hands-on experiences in cutting-edge technologies, robotics, digital marketing, and more. With a vision to make practical learning affordable and accessible, we provide the tools and skills that empower students to excel and innovate
 </h4>
        </p>
        
        
        
         <p className="p__xam" style={{ margin: '2rem 0' }}>
          <h1 style={{  marginTop: '1rem' }}>Internship </h1>
            <h2 style={{  marginTop: '1rem' }}>Empowering Young Minds with Real-World Experience: </h2>
          <h4 style={{ color: 'black', marginTop: '1rem' }}> Skill-G pioneers India's first internship program for school students, opening doors to practical learning, certificates, and even earnings. Our vision is to create a launchpad for budding talents, enabling them to gain valuable exposure and hands-on skills from an early age. Through internships, we're shaping the leaders of tomorrow while offering a unique opportunity to earn, learn, and thrive
 </h4>
        </p>
        
        
          <p className="p__xam" style={{ margin: '2rem 0' }}>
          <h1 style={{  marginTop: '1rem' }}>Industrial Visits </h1>
           <h2 style={{  marginTop: '1rem' }}>Explore Industries Up Close: </h2>
          <h4 style={{ color: 'black', marginTop: '1rem' }}> Skill-G Industrial Visits offer students a captivating journey into the heart of industries and technology. With expert guides, students get to witness real-world operations, fostering a deeper understanding of how concepts come to life. These science tours ignite curiosity and provide a hands-on glimpse into the world of innovation and production </h4>
        </p>
        
        
          <p className="p__xam" style={{ margin: '2rem 0' }}>
          <h1 style={{  marginTop: '1rem' }}> Free Online Courses </h1>
          <h4 style={{ color: 'black', marginTop: '1rem' }}> a ropotic oddddddddddddddddddddddddd </h4>
        </p>
        
        
         
       
      </div>
      <div className="app__wrapper_img">
       
      </div>
    </div>

    
  </>);
};

export default Card;

