// == Import npm
import React from 'react';



// == Import

import './ProjetLabDetailed.scss';
import NextProjectButton from 'src/components/NextProjectButton';

// == Composant
const ProjetLabDetailed  = () => { 
  return(
    <div className="ProjetLabDetailed">

      <hr></hr>
      <p className="ProjetLabDetailed__p" >Profil GitHub :  <a href="https://github.com/Lucas-Millet" target="_blank" className="ProjetLabDetailed__link" id="github"><span className="ProjetLabDetailed__span">https://github.com/Lucas-Millet</span></a>
     
      </p>
      <NextProjectButton  value=""/>
    </div>
      
  )
};

// == Export
export default ProjetLabDetailed ;
