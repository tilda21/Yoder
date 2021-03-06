import React from "react";
import "./Balloon.css";

class Balloon extends React.Component {
  render() {  
    const { balloonMessage } = this.props;

    return (
      <div className="speech-bubble">
        {balloonMessage}
      </div>
    );
  }
}

export default Balloon;
