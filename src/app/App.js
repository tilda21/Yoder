import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>YODER</h1>
        <Switch>
          <Route exact path=""/>
          <Route exact path=""/>
          <Route exact path=""/>
        </Switch>
        
      </header>
    </div>
  );
}

export default withRouter(App);;
