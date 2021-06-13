import React from "react";
import Balloon from "./Balloon.js";


class Homepage_1 extends React.Component {
  render() {
    const { balloonMessage } = this.props;

    return (
      <div className="container">
        <Balloon balloonMessage={balloonMessage} />
        <img src="./yoda.png" alt="yoda"/>;
      </div>
    );
  }
}

export default Homepage_1;
