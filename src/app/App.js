import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import ChosenCharacter from '../characterChoice2&3&4/chosen_character_4';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'Beautiful',
    };
  }

  render() {
    return (
      <div className="App">
        <h1>YODER</h1>
        <h2>{this.state.test} you are!</h2>

        <Switch>
          <Route exact path="/"/>
          <Route exact path="/"/>
          <Route 
            exact path="/chosencharacter"
            render={() => <ChosenCharacter/>}/>
        </Switch>
        
      </div>
    );
  }
}

export default withRouter(App);
