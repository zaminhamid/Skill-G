import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, } from './container';
import { Navbar } from './components';
import {Card }from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
     <Header />
     <Card/>
     <Gallery />
    <AboutUs />
  
    < Laurels />
    <Chef />
    <FindUs />
    <Footer />
    
   
  </div>
);

export default App;
