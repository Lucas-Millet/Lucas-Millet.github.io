// == Import npm
import React, { useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import { NavLink } from 'react-router-dom';

// == Import

import './CVContent.scss';
import photo from 'src/assets/picture/photoCV.png';
import CV from 'src/assets/CV/CV_Lucas.png';


// == Composant
const CVContent  = () => { 
  return(
    <div className="cvContent">
    <div className="cvContent__picture">
      <div className="cvContent__encart">
        <p>Lucas Millet</p>
        <p>FRONT END DEVELOPPEUR</p>
      </div>
    </div>
   <div className="cvContent__Block">
     <h2>Ce que je suis</h2>
     <p>
     Jeune diplomé d’un master 2 en UX Design, je suis à la recherche d’une mission en tant qu’UX Designer avec une forte composante humaine. Ayant d’abord suivi des études de développeur web, j’ai décidé de me réorienter vers l’UX Design afin de me rendre plus utile pour l’utilisateur et lui fournir des expériences plus satisfaisantes. Curieux et audacieux, j’aime explorer toutes les solutions possibles avant de m’engager.
     </p>
   </div>
   <div className="cvContent__Block">
     <h2>Ce que je fais</h2>
     <p>
     Jeune diplomé d’un master 2 en UX Design, je suis à la recherche d’une mission en tant qu’UX Designer avec une forte composante humaine. Ayant d’abord suivi des études de développeur web, j’ai décidé de me réorienter vers l’UX Design afin de me rendre plus utile pour l’utilisateur et lui fournir des expériences plus satisfaisantes. Curieux et audacieux, j’aime explorer toutes les solutions possibles avant de m’engager.
     </p>
   </div>
   <div className="cvContent__Block">
     <h2>Ce qui m'intéresse</h2>
     <p>
     Jeune diplomé d’un master 2 en UX Design, je suis à la recherche d’une mission en tant qu’UX Designer avec une forte composante humaine. Ayant d’abord suivi des études de développeur web, j’ai décidé de me réorienter vers l’UX Design afin de me rendre plus utile pour l’utilisateur et lui fournir des expériences plus satisfaisantes. Curieux et audacieux, j’aime explorer toutes les solutions possibles avant de m’engager.
     </p>
   </div>
   <a href={CV} id="DlCV" download>Télécharger mon CV</a>
  
    </div>
 
  )
};

// == Export
export default CVContent ;
