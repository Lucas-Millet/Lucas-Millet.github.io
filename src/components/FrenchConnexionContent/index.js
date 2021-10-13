// == Import npm
import React from 'react';


// == Import
import HeaderProject from 'src/components/HeaderProject';
import FrenchConnexionDetailed from 'src/components/FrenchConnexionDetailed';
import './FrenchConnexionContent.scss';
import FC from 'src/assets/picture/frenchConnexionPicture.png';



// == Composant
const FrenchConnexionContent  = () => { 
  const lien = "portfolio";
  return(
    <div className="frenchConnexionContent">
      <div className="frenchConnexionContent__Color"></div>
      <div className="frenchConnexionContent__Title">French Connexion</div>
      <div className="frenchConnexionContent__Intro">Projet de fin de formation au d’Oclock, nous avions pour mission de réaliser un site sur une durée de trois semaines. Nous avons choisi la dynamique du voyage et avons crée French Connexion, le premier site de mise en relation de français metropolitains avec des étrangers francophones.</div>
      <HeaderProject nom={""} stack={"React, Redux, Symfony, Mysql"} image={FC}  />
      <FrenchConnexionDetailed />
    
    </div>
 
  )
};

// == Export
export default FrenchConnexionContent ;
