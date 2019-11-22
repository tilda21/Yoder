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
import Credits from "../credits/credits";
import "./yodalogo.png";
import Button from "../auxiliaries/button";
import soundfile from "./StarWarsThemeJohnWilliams.mp3"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      chosenCharacter: {},
      url: soundfile,
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

  handleChosenCharacter = char => {
    this.setState({ chosenCharacter: char });
  };

  render() {
    return (
      <div className="App">
        <div id="logo">
          <Link to="/">
            <img src="./yoderlogo.png"></img>
          </Link>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Homepage_1
                  balloonMessage={
                    <h2>
                      Welcome to the universe's #1 intergalactic dating service!
                      🚀
                    </h2>
                  }
                />
                <Link to="/welcome1">
                  <Button message="Next" />
                </Link>
              </>
            )}
          />
          <Route
            exact
            path="/welcome1"
            render={() => (
              <>
                <Homepage_1
                  balloonMessage={
                    <h2>
                      Fall in love, or do not! There is no try! I'll guide you
                      to find the love of your life. 💚
                    </h2>
                  }
                />
                <Link to="/character">
                  <Button message="Next" />
                </Link>
              </>
            )}
          />
          <Route
            exact
            path="/wiseyoda"
            render={() => (
              <>
                <Homepage_1 balloonMessage={
                  <h2>
                    Hello, {this.state.chosenCharacter.name}, thank you for identifying yourself.
                    <br/>
                    Now your lover, you must choose.
                  </h2>
                }
                />
                <Link to="/hotornot">
                  <Button message="May love be with me!"/>
                </Link>
              </>
            )}
          />
          <Route
            exact
            path="/character"
            render={() => (
              <FilterByGender
                characters={this.state.characters}
                balloonMessage={this.props.balloonMessage}
                handleChosenCharacter={this.handleChosenCharacter}
              />
            )}
          />
          <Route
            exact
            path="/chosencharacter"
            render={() => (
              <ChosenCharacter chosenCharacter={this.state.chosenCharacter} />
            )}
          />
          <Route
            exact
            path="/hotornot"
            render={() => (
              <HotorNot
                characters={this.state.characters}
                chosenCharacter={this.state.chosenCharacter}
              />
            )}
          />
          <Route exact path="/wedding" render={() => <Wedding />} />
          <Route exact path="/credits" render={() => <Credits url={this.state.url} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
