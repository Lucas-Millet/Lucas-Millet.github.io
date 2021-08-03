// == Import npm
import React, { useState } from 'react';


// == Import

import './HeaderProject.scss';



// == Composant
const HeaderProject  = ({image,nom,stack,annee,mission}) => { 
  return(
    <div className="HeaderProject">
      <img src={image} alt="photo du projet" className="HeaderProject__img"/>
      <h1 className="HeaderProject__h1">{nom}</h1>
      <h2 className="HeaderProject__h2">Stack : {stack}</h2>
      <div className="ProjetResume">
      <h2 className="ProjetResume__h2">Année</h2>
      <p className="ProjetResume__p">
        {annee}
      </p>
      <h2 className="ProjetResume__h2">Mission</h2>
      <p className="ProjetResume__p">
        {mission}
      </p>
    </div>
    </div>
 
  )
};

// == Export
export default HeaderProject;
