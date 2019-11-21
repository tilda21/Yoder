import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { getDataAPI } from "./getDataAPI";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'Beautiful',
      testAPI: '',
    };
  }
  FnGetDataAPI = async () => {
    let GetData = await getDataAPI();
    let character1 = GetData[0].name;
    this.setState({testAPI: character1});
    console.log('function called')
  }
  componentDidMount() {
    this.FnGetDataAPI();
}


  render() {
    return (
      <div className="App">
        <h1>YODER</h1>
        <h2>{this.state.test} you are!</h2>

        <h1>{this.state.testAPI}</h1>

        <Switch>
          <Route exact path=""/>
          <Route exact path=""/>
          <Route exact path=""/>
        </Switch>
        
      </div>
    );
  }
}

export default withRouter(App);;
