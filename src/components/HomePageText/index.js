// == Import npm
import React, { Fragment, useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { NavLink } from 'react-router-dom';

// == Import

import './HomePageText.scss';


// == Composant
const HomePageText = () => { 
  
  return(
  <div className="homePageText">
  <p id="firstLines">Bonjour, je suis <span id="name">Lucas Millet</span> développeur Front-end basé sur Paris. </p>
  <p id="welcome">Bienvenue sur mon portfolio ! </p>
  <NavLink to="/portfolio"><button id="buttonProjects">Voir mes projets</button></NavLink>
  </div>

 

)
};

// == Export
export default HomePageText;
