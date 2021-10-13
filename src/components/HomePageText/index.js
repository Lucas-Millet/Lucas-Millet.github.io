// == Import npm
import React, { Fragment, useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { Link } from 'react-router-dom';


// == Import

import './HomePageText.scss';
import photo from 'src/assets/picture/photo.svg';
import arrow from 'src/assets/picture/arrow_right.svg';


// == Composant
const HomePageText = () => { 
  
  return(
  <div className="homePageText">
     <div id="aboutme">
       <div className="leftSideContent">
        <p id="job">Développeur FRONT-END junior</p>
        <p id="localisation">Basé sur Paris <span>(enfin pas loin)</span></p>
        <img src={arrow} alt="" className="arrow_right"/>
       </div>
       <div className="rightSideContent">
        <img src={photo} alt="lucas millet photo" id="photo"></img>
        <div id="name">Lucas MILLET</div>
        <div className="homePageText__info">
        <p id="introduction">Je développe des applications en <span className="bold">reactJS</span> et <span className="bold">vueJS</span>. J'emmène mes notions en <span className="bold">UX Design</span> au sein de mes projets. </p>
        <Link to="/portfolio" className="myProject">Découvrez mes projets</Link>
        </div>
       </div>
    </div>
    
   

   

   
    

  </div>
 

 

)
};

// == Export
export default HomePageText;
