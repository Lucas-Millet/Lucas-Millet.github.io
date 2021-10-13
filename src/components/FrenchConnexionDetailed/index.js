// == Import npm
import React, { useState } from 'react';



// == Import

import './FrenchConnexionDetailed.scss';
import PuD from 'src/assets/picture/pud.svg';
import PuM from 'src/assets/picture/pum.svg';
import nicolas from 'src/assets/picture/personna.svg';
import aurelie from 'src/assets/picture/personna2.svg';
import samuel from 'src/assets/picture/personna3.svg';
import NextProjectButton from 'src/components/NextProjectButton';


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
      <img src={nicolas} alt="Wireframes" className="frenchConnexionDetailed__img"/>
      <img src={aurelie} alt="Wireframes" className="frenchConnexionDetailed__img"/>
      <img src={samuel} alt="Wireframes" className="frenchConnexionDetailed__img"/>
      <figcaption>Personna</figcaption>
      <NextProjectButton  value="portfolio"/>
    </div>
 
  )
};

// == Export
export default FrenchConnexionDetailed ;
