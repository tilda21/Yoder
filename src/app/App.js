/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./App.css";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { getDataAPI } from "./getDataAPI";
import FilterByGender from "../characterChoice2&3&4/filter_2";
import ChosenCharacter from "../characterChoice2&3&4/chosen_character_4";
import Wedding from "../wedding7/wedding_7";
import HotorNot from "../HotorNot/HotorNot.js";
import Homepage_1 from "../homepage1/homepage_1";
import "./yodalogo.png";
import Button from "../auxiliaries/button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  FnGetDataAPI = async () => {
    let GetData = await getDataAPI();
    let APIcharacters = GetData;
    this.setState({ characters: APIcharacters });
  };

  componentDidMount() {
    this.FnGetDataAPI();
  }

  // Mapping by gender
  // const gender = GetData.map(character => character.gender)

  //Mapping by user choice of gender, in this case female:
  // console.log(gender.filter(gender => gender === 'female'))

  render() {
    return (
      <div className="App">
        <div id="logo">
          <Link to="/"><img src="./yoderlogo.png"></img></Link>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Homepage_1 balloonMessage={<h1>Choose a character</h1>}/>
                <Link to="/character"><Button  message='character'/></Link>
                <div className="temporaryButtons">
                  <Link to="/character"><Button  message='character'/></Link>
                  <Link to="/chosencharacter"><Button  message='chosencharacter'/></Link>
                  <Link to="/hotornot"><Button  message='hotornot'/></Link>
                  <Link to="/wedding"><Button  message='wedding'/></Link>
                </div>
              </>
            )}
          />
          <Route
            exact
            path="/test"
            render={() => (
              <>
                <Homepage_1 balloonMessage="You've found a love" />
                <Link to="/"><Button  message='next'/></Link>
              </>
            )}
          />
          <Route
            exact
            path="/character"
            render={() => 
            <FilterByGender 
              characters={this.state.characters}
              balloonMessage={this.props.balloonMessage} />}
          />
          <Route
            exact
            path="/chosencharacter"
            render={() => <ChosenCharacter />}
          />
          <Route
            exact
            path="/hotornot"
            render={() => <HotorNot characters={this.state.characters} />}
          />
          <Route exact path="/wedding" render={() => <Wedding />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
