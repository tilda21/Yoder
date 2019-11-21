import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import ChosenCharacter from '../characterChoice2&3&4/chosen_character_4';

function App() {
  return (
    <div className="App">
      <header>
        <h1>YODER</h1>
        <Switch>
          <Route exact path="/"/>
          <Route exact path="/"/>
          <Route 
            exact path="/chosencharacter"
            render={() => <ChosenCharacter/>}/>
        </Switch>
        
      </header>
    </div>
  );
}

export default withRouter(App);
