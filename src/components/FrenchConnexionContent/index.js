// == Import npm
import React from 'react';


// == Import
import HeaderProject from 'src/components/HeaderProject';
import FrenchConnexionDetailed from 'src/components/FrenchConnexionDetailed';
import NextProjectButton from 'src/components/NextProjectButton';
import './FrenchConnexionContent.scss';
import FC from 'src/assets/picture/frenchConnexionPicture.png';



// == Composant
const FrenchConnexionContent  = () => { 
  const lien = "portfolio";
  return(
    <div className="frenchConnexionContent">
      <HeaderProject nom={"French Connexion"} stack={"React, Redux, Symfony, Mysql"} image={FC} annee={"2021"} mission={"Projet de fin de formation au d’oclock, nous avions pour mission de réaliser un site sur une durée de trois semaines. Nous avons choisi la dynamique du voyage et avons crée French Connexion, le premier site de mise en relation de français metropolitains avec des étrangers francophones."} />
      <FrenchConnexionDetailed />
      <NextProjectButton  value={lien}/>
    </div>
 
  )
};

// == Export
export default FrenchConnexionContent ;
