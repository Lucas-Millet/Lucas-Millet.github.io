// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Import Component
import Nav from 'src/components/Nav';
import Menu from 'src/components/Menu';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    
    <p>BodyBackground</p>
    <p>TextContent</p>
    <p>CTA</p>
  </div>
);

// == Export
export default App;
