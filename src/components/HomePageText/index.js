// == Import npm
import React, { Fragment, useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { Link } from 'react-router-dom';


// == Import

import './HomePageText.scss';
import links from 'src/data/dataLinks';
import photo from 'src/assets/picture/photoCV.png';



// == Composant
const HomePageText = () => { 
  console.log(links);
  return(
  <div className="homePageText">
     <div id="aboutme">
    <img src={photo} alt="lucas millet photo" id="photo"></img>
    <div id="name">Lucas MILLET</div>
    <div id="job">Développeur FRONT-END junior</div>
    </div>
    <p id="introduction">Je développe des applications en <span className="bold">reactJS</span> et <span className="bold">vueJS</span>. J'emmène mes notions en <span className="bold">UX Design</span> au sein de mes projets. </p>
   
    <Link to="/qui-suis-je" className="knowMeMore">Découvrez moi plus en détail.</Link>

    <Link to="/portfolio" className="myProject">Voir mes projets</Link>

   
    

  </div>
 

 

)
};

// == Export
export default HomePageText;
