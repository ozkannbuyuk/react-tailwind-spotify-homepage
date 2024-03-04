import React, { useState, useEffect } from "react";

import { LiaRandomSolid } from "react-icons/lia";
import { SlLoop } from "react-icons/sl";
import { PiSkipBackFill, PiSkipForwardFill, PiPauseFill } from "react-icons/pi";

const PlayingBar = ({ curPlayingLength }) => {
  const [curTime, setCurTime] = useState({
    curMin: 0,
    curSec1: 0,
    curSec2: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurTime((prevTime) => {
        let newCurSec2 = prevTime.curSec2 + 1;
        let newCurSec1 = prevTime.curSec1;
        let newCurMin = prevTime.curMin;

        if (newCurSec2 === 10) {
          newCurSec1++;
          newCurSec2 = 0;
        }
        if (newCurSec1 === 6) {
          newCurMin++;
          newCurSec1 = 0;
        }

        return {
          curMin: newCurMin,
          curSec1: newCurSec1,
          curSec2: newCurSec2,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center w-2/4 text-spotify-text-color">
      <div className="h-1/2 flex pt-4 gap-5 justify-center items-center text-2xl">
        <LiaRandomSolid className="hover:text-white"></LiaRandomSolid>
        <PiSkipBackFill className="hover:text-white"></PiSkipBackFill>
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-spotify-white">
          <PiPauseFill className="text-black text-base"></PiPauseFill>
        </div>
        <PiSkipForwardFill className="hover:text-white"></PiSkipForwardFill>
        <SlLoop className="text-lg hover:text-white"></SlLoop>
      </div>
      <div className="h-1/2 flex w-[40rem] gap-2 font-circularStdBook text-xs">
        <div className="flex items-center">
          {curTime.curMin}:{curTime.curSec1}
          {curTime.curSec2}
        </div>
        <div className="relative w-full flex justify-center items-center">
          <div className="w-[38rem] h-1 bg-spotify-bg-light-gray-4"></div>
          <div className="absolute left-0 w-2 h-2 rounded-full bg-white"></div>
        </div>
        <div className="flex items-center">{curPlayingLength}</div>
      </div>
    </div>
  );
};

export default PlayingBar;
