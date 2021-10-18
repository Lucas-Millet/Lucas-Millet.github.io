// == Import npm
import React, { useState } from 'react';



// == Import

import loader from 'src/assets/picture/loader.gif';
import './Loader.scss';

// == Composant
const Loader = () => { 
  
  return(
  <div className="Loader">
    <img src={loader} />
  </div>
 

 

)
};

// == Export
export default Loader;
