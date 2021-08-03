// == Import npm
import React from 'react';


// == Import
import HeaderProject from 'src/components/HeaderProject';
import ProjetPortfolioDetailed from 'src/components/ProjetPortfolioDetailed';
import NextProjectButton from 'src/components/NextProjectButton';
import './ProjetPortfolioContent.scss';
import Port from 'src/assets/picture/logo.png';



// == Composant
const ProjetPortfolioContent  = () => { 

  const lien = "lab";
  return(
    <div className="projetPortfolioContent">
      <HeaderProject nom={"Portfolio"} stack={"React"} image={Port} annee={"2021"} mission={"Mes études sont terminées, il est temps d'avoir une présence sur le web. Ce site n'est et ne sera jamais fini. Je ferais des mises à jours régulières et partagerait mes projets dans mon labo"} />

      <ProjetPortfolioDetailed />

      <NextProjectButton  value={lien}/>
    </div>
 
  )
};

// == Export
export default ProjetPortfolioContent ;
