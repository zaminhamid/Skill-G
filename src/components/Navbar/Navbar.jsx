import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import imagz from '../../assets/text.png'; 
import './Navbar.css';
// Import the ContactUs component or content


// ...

// Inside your JSX, create a link to the ContactUs section
{/*<li><a href="#contactus" onClick={() => setToggleMenu(false)}><ContactUs /></a></li>*/}


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 >Skill-G</h1>
        <h6 style={{ color: 'white' }}>Odyssey of the genius</h6>
     

   
        
      </div>
      
      <ul className="app__navbar-links">
      {/*  <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
       
         
        
        
        <li className="p__opensans"><a href="#FooterOverlay">Contact</a></li>*/}
      </ul>
      <div className="app__navbar-login">
      	<a href="https://docs.google.com/forms/d/e/1FAIpQLSdrriLkDl3-v-nAuY6x_pBZGFgvQ28KTEAn8DCSu9Z2bXdFkg/viewform?usp=sf_link" className="p__opensans">Log In / Registration</a>
      
        <div />
       
      </div> 
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
             
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdrriLkDl3-v-nAuY6x_pBZGFgvQ28KTEAn8DCSu9Z2bXdFkg/viewform?usp=sf_link" onClick={() => setToggleMenu(false)}>Register</a></li>
          
              {/*<li><a href="#Footer" onClick={() => setToggleMenu(false)}>Contact</a></li>*/}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
