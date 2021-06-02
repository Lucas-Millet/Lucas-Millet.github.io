// == Import npm
import React, { useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { NavLink } from 'react-router-dom';

// == Import

import './PortfolioContent.scss';
import HomePageText from 'src/components/HomePageText';
import projetImg from 'src/assets/picture/randomProject.jpg';
import DataProject from 'src/data/dataProject';


// == Composant
const PortfolioContent = () => { 
  console.log(projetImg);
  return(
    <div className="portfolioContent">
      <div id="Arianne">Portfolio</div>
    <div className="portfolioContent__Background"></div>
   
    {DataProject.map((project) =>
      <NavLink to={`/portfolio/${project.url}`} key={project.id}>
      <div className="portfolioContent__Projet" >
        
          
        <div className="portfolioContent__ProjetText">
         <p>{project.name}</p>
         <p>Stack : <span>{project.stack}</span></p>
        </div>
        
       <div className="portfolioContent__ProjetImg">
         <img src={projetImg} alt="projet image" className="portfolioContent__ProjetImg__img" /> 
       </div>
      
      </div>
      </NavLink>
    )}
    </div>
 
  )
};

// == Export
export default PortfolioContent;
