// == Import npm
import React, { useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { NavLink } from 'react-router-dom';

// == Import

import './PortfolioContent.scss';
import HomePageText from 'src/components/HomePageText';
import projetImg from 'src/assets/picture/randomProject.jpg';
import FrenchCoImg from 'src/assets/picture/frenchco.svg'
import French from 'src/assets/picture/french.png'
import PortfolioImg from 'src/assets/picture/logosite.svg'



// == Composant
const PortfolioContent = () => { 
  console.log(projetImg);
  return(
    <div className="portfolioContent">
    
   <h1 className="portfolioContent__Header">Mes projets</h1>
    
    <div className="portfolioContent__project">

    
      <NavLink className="portfolioContent__link" to='/portfolio/french_connexion' key='1'>
      <div className="portfolioContent__Projet" id="frenchCo" >
          
      <div className="portfolioContent__ProjetText">
        <div className="portfolioContent__Cadre">
          <img src={French} className="portfolioContent__ProjetImg" alt="image de garde french connexion" />
        </div>
          <p className="portfolioContent__Title">French Connexion</p>
         
          </div>
      </div>
      </NavLink>

      <NavLink className="portfolioContent__link" to='/portfolio/portfolio' key='2'>
      <div className="portfolioContent__Projet" id="portfolio" > 
      <div className="portfolioContent__ProjetText">
      <div className="portfolioContent__Cadre">
          <img src={PortfolioImg} className="portfolioContent__ProjetImg" alt="image de garde du portfolio" />
        </div>
          <p className="portfolioContent__Title">Portfolio</p>
          
          </div>
      </div>
      </NavLink>

      <NavLink className="portfolioContent__link" to='/portfolio/lab' key='3'>
      <div className="portfolioContent__Projet" id="lab" >  
      <div className="portfolioContent__ProjetText">
      <div className="portfolioContent__Cadre">
          <img src={projetImg} className="portfolioContent__ProjetImg" alt="image de garde du lab" />
        </div>
          <p className="portfolioContent__Title">Lab</p>
          
          </div>
      </div>
      </NavLink>
      </div>
     
   
    </div>
 
  )
};

// == Export
export default PortfolioContent;
