import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { getDataAPI } from "./getDataAPI";
import ChosenCharacter from "../characterChoice2&3&4/chosen_character_4";
import Wedding from "../wedding7/wedding_7";
import HotorNot from "../HotorNot/HotorNot.js";
import Homepage_1 from "../homepage1/homepage_1";
import "./yodalogo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Beautiful",
      testAPI: ""
    };
  }
  FnGetDataAPI = async () => {
    let GetData = await getDataAPI();
    let character1 = GetData[0].name;
    this.setState({ testAPI: character1 });
  };
  componentDidMount() {
    this.FnGetDataAPI();
  }

  // Mapping by gender
  // const gender = GetData.map(character => character.gender)

  //Mapping by user choice of gender, in this case female:
  // console.log(gender.filter(gender => gender === 'female'))

  render() {
    console.log();

    return (
      <div className="App">
        <div id="logo">
          <img src="./yoderlogo.png"></img>
        </div>
        {/* <h2>{this.state.test} you are!</h2>
        <h1>{this.state.testAPI}</h1> */}

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Homepage_1 balloonMessage="Welcome my galactic loveseeker! 💚" />
              </>
            )}
          />
          <Route
            exact
            path="/chosencharacter"
            render={() => <ChosenCharacter />}
          />
          <Route exact path="/hotornot" render={() => <HotorNot />} />
          <Route exact path="/wedding" render={() => <Wedding />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
