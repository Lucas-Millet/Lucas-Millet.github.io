// == Import npm
import React from 'react';



// == Import

import './ProjetLabDetailed.scss';
import wireframes from 'src/assets/picture/wireframes_portfolio.png';
import inspiration from 'src/assets/picture/inspiration.png';


// == Composant
const ProjetLabDetailed  = () => { 
  return(
    <div className="ProjetLabDetailed">

      <hr></hr>
      <p className="ProjetLabDetailed__p" >Profil GitHub :  <a href="https://github.com/Lucas-Millet" target="_blank" className="ProjetLabDetailed__link" id="github"><span className="ProjetLabDetailed__span">https://github.com/Lucas-Millet</span></a>
     
      </p>
    </div>
      
  )
};

// == Export
export default ProjetLabDetailed ;
