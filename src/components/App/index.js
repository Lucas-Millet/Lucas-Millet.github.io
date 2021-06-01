// == Import npm
import React from 'react';
import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';
// == Import
import './styles.scss';

// == Import Component
import Nav from 'src/components/Nav';
import Menu from 'src/components/Menu';
import HomePageContent from 'src/components/HomePageContent';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Switch>
      <Route path="/" exact>
        <HomePageContent />
        
      </Route>
      <Route path="/mon-CV" exact>
        <h1>MON CV</h1>
      </Route>
      <Route path="/portfolio" exact>
        <h1>Portfolio</h1>
      </Route>
      <Route path="/portfolio/">
        <h1>Un projet</h1>
      </Route>
    </Switch>

   
  </div>
);

// == Export
export default App;
