// == Import npm
import React from 'react';


// == Import
import HeaderProject from 'src/components/HeaderProject';
import ProjetLabDetailed from 'src/components/ProjetLabDetailed';

import './ProjetLabContent.scss';
import Project from 'src/assets/picture/randomProject.jpg';



// == Composant
const ProjetLabContent  = () => { 

  const lien = "";
  return(
    <div className="projetLabContent">
      <div className="projetLabContent__Color"></div>
      <div className="projetLabContent__Title">Labo</div>
      <div className="projetLabContent__Intro">Je vous partage ici mes expériences et mes projets personnels. J'aime explorer et essayer de nouvelles choses : technos, librairies...</div>
      <HeaderProject nom={"Labo"} stack={"React, Redux, Vues, PHP, Symfony, HTML, CSS"} image={Project} />

      <ProjetLabDetailed />

      
    </div>
 
  )
};

// == Export
export default ProjetLabContent ;
