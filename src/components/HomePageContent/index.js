// == Import npm
import React, { useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { NavLink } from 'react-router-dom';

// == Import

import './HomePageContent.scss';
import HomePageText from 'src/components/HomePageText';

// == Composant
const HomePageContent = () => { 
  
  return(
  <div className="homePageContent">
   <HomePageText/>  
  
  </div>

)
};

// == Export
export default HomePageContent;
