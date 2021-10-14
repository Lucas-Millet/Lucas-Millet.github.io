// == Import npm
import React, { useState } from 'react';


// == Import

import './HeaderProject.scss';



// == Composant
const HeaderProject  = ({image,stack,mission}) => { 
  return(
    <div className="HeaderProject">
      
      <img src={image} alt="photo du projet" className="HeaderProject__img"/>
      <h2 className="HeaderProject__h2">Stack : {stack}</h2>
      <p className="HeaderProject__p">{mission}</p>
    </div>
 
  )
};

// == Export
export default HeaderProject;
