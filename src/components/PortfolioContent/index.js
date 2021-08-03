// == Import npm
import React, { useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { NavLink } from 'react-router-dom';

// == Import

import './PortfolioContent.scss';
import HomePageText from 'src/components/HomePageText';
import projetImg from 'src/assets/picture/randomProject.jpg';
import FrenchCoImg from 'src/assets/picture/frenchCo.png'
import PortfolioImg from 'src/assets/picture/logo.png'
import DataProject from 'src/data/dataProject';


// == Composant
const PortfolioContent = () => { 
  console.log(projetImg);
  return(
    <div className="portfolioContent">
    
   <h1 className="portfolioContent__Header">Mes projets</h1>
    

      <NavLink to='/portfolio/french_connexion' key='1'>
      <div className="portfolioContent__Projet" id="frenchCo" >
          
      <div className="portfolioContent__ProjetText">
          <p className="portfolioContent__Title">French Connexion</p>
          <p className="portfolioContent__Stack">Stack : <span>React, Redux, Symfony, Mysql</span></p>
          </div>
      </div>
      </NavLink>

      <NavLink to='/portfolio/portfolio' key='2'>
      <div className="portfolioContent__Projet" id="portfolio" >
          
          
      <div className="portfolioContent__ProjetText">
          <p className="portfolioContent__Title">Portfolio</p>
          <p className="portfolioContent__Stack">Stack : <span>React</span></p>
          </div>
      </div>
      </NavLink>

      <NavLink to='/portfolio/lab' key='3'>
      <div className="portfolioContent__Projet" id="lab" >
          
          
      <div className="portfolioContent__ProjetText">
          <p className="portfolioContent__Title">Lab</p>
          <p className="portfolioContent__Stack">Stack : <span>React, Redux, Vue, HTML, CSS</span></p>
          </div>
      </div>
      </NavLink>

     
   
    </div>
 
  )
};

// == Export
export default PortfolioContent;
