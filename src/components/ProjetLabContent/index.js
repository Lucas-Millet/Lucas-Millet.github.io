// == Import npm
import React from 'react';


// == Import
import HeaderProject from 'src/components/HeaderProject';
import ProjetLabDetailed from 'src/components/ProjetLabDetailed';
import NextProjectButton from 'src/components/NextProjectButton';
import './ProjetLabContent.scss';
import Project from 'src/assets/picture/randomProject.jpg';



// == Composant
const ProjetLabContent  = () => { 

  const lien = "";
  return(
    <div className="projetLabContent">
      <HeaderProject nom={"Labo"} stack={"React, Redux, Vues, PHP, Symfony, HTML, CSS"} image={Project} annee={"2021"} mission={"Je vous partage ici mes expériences et mes projets personnels. J'aime explorer et essayer de nouvelles choses : technos, librairies..."} />

      <ProjetLabDetailed />

      <NextProjectButton  value={lien}/>
    </div>
 
  )
};

// == Export
export default ProjetLabContent ;
