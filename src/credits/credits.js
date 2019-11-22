import React, { useState, useEffect } from "react";
import Crawl from "react-star-wars-crawl";
import "./credits.css";

// Import the necessary styles, or include them another way with your build process
import "react-star-wars-crawl/lib/index.css";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  return [playing, toggle];
};

const Credits = ({ url }) => {
  //console.log(url)
  const [playing, toggle] = useAudio(url);

  return (
    <>
      <div id="Margin" className="centerdiv">
        <button id="Style" className="buttonstyle" onClick={toggle}>
          {playing ? "🔇" : "🔉"}
        </button>
      </div>
      <Crawl
        title="Yoder: Intergalactic Dating"
        subTitle="A New Challenge"
        text="It is a period of intense learning. React error messages, CSS hell, Javascript scope issues. Front-end web frameworks have won victories against us, technically, socially and emotionally. But we do not despair! After 5 weeks of learning we embarked on a new challenge: Create the best dating app using the Star Wars API in 24 hours. So with love, we present to you - Yoder: Intergalactic Dating, which was developed in one day only by yours truly: Matilde Ribeiro, Carolina Viero and Edward Watson. May the force be with you."
      />
    </>
  );
};

export default Credits;
