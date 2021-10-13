// == Import npm
import React from 'react';


// == Import
import HeaderProject from 'src/components/HeaderProject';
import ProjetPortfolioDetailed from 'src/components/ProjetPortfolioDetailed';
import './ProjetPortfolioContent.scss';
import Port from 'src/assets/picture/logo.png';



// == Composant
const ProjetPortfolioContent  = () => { 

  const lien = "lab";
  return(
    <div className="projetPortfolioContent">
       <div className="projetPortfolioContent__Color"></div>
      <div className="projetPortfolioContent__Title">Portfolio</div>
      <div className="projetPortfolioContent__Intro">Mes études sont terminées, il est temps d'avoir une présence sur le web. Ce site n'est et ne sera jamais fini. Je ferais des mises à jours régulières et partagerait mes projets dans mon labo</div>
      <HeaderProject nom={"Portfolio"} stack={"React"} image={Port} />

      <ProjetPortfolioDetailed />

  
    </div>
 
  )
};

// == Export
export default ProjetPortfolioContent ;
