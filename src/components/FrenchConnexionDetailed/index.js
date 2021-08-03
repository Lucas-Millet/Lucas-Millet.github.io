// == Import npm
import React, { useState } from 'react';



// == Import

import './FrenchConnexionDetailed.scss';
import PuD from 'src/assets/picture/PuD.png';
import PuM from 'src/assets/picture/PuM.png';
import wireframes from 'src/assets/picture/wireframes.png';



// == Composant
const FrenchConnexionDetailed  = () => { 
  return(
    <div className="frenchConnexionDetailed">
     
      <a href="http://frenchco.surge.sh/" target="_blank" className="frenchConnexionDetailed__link">Lien vers le site</a>
      <hr></hr>
      <img src={PuD} alt="Parcours utilisateur desktop" className="frenchConnexionDetailed__img"/>
      <figcaption>Parcours utilisateur Desktop</figcaption>
      <img src={PuM} alt="Parcours utilisateur mobile" className="frenchConnexionDetailed__img"/>
      <figcaption>Parcours utilisateur Mobile</figcaption>
      <img src={wireframes} alt="Wireframes" className="frenchConnexionDetailed__img"/>
      <figcaption>Wireframes</figcaption>
      
    </div>
 
  )
};

// == Export
export default FrenchConnexionDetailed ;
