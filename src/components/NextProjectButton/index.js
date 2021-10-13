// == Import npm
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// == Import

import './NextProjectButton.scss';




// == Composant
const NextProjectButton  = ( {value} ) => { 
console.log(value);
  return(
    <div className="nextProjectButton">
      <NavLink to={`/portfolio/${value}`}><button id="buttonNextProject">{value ? `Projet suivant : ${value}` : "Retour aux projets"}</button></NavLink>
    </div>
 
  )
};

// == Export
export default NextProjectButton ;
