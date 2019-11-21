import React from "react";
import "./Balloon.css";

class Balloon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { balloonMessage } = this.props;

    return (
      <div class="speech-bubble">
        <h1>{balloonMessage}</h1>
      </div>
    );
  }
}

export default Balloon;
