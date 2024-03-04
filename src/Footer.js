import React from "react";

import PlayingCover from "./components/PlayingCover";
import PlayingBar from "./components/PlayingBar";
import PlayingOptions from "./components/PlayingOptions";

const Footer = () => {
  return (
    <div className="col-start-1 flex justify-between sticky bottom-0 bg-black w-screen">
      <PlayingCover
        curPlayingName="A.A.K"
        curPlayingArtist="CATO x MAHO G"
        liked="1"
      ></PlayingCover>
      <PlayingBar curPlayingLength="2:39"></PlayingBar>
      <PlayingOptions></PlayingOptions>
    </div>
  );
};

export default Footer;
