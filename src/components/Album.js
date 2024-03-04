import React, { useState } from "react";

import { BsFillPlayFill } from "react-icons/bs";

const Album = ({ name, expl, pic }) => {
  const [onCard, setOnCard] = useState(false);

  const handleEnter = () => {
    setOnCard(true);
  };

  const handleLeave = () => {
    setOnCard(false);
  };

  return (
    <div
      className="rounded-lg bg-spotify-bg-light-gray-3 w-40 h-64 hover:bg-spotify-bg-light-gray-1 hover:cursor-pointer flex flex-col px-4"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="flex relative h-2/3">
        <div className="flex items-center">
          <img alt="" src={pic} className="rounded-lg"></img>
        </div>
        {onCard && (
          <div className="absolute bg-spotify-green-1 w-8 h-8 rounded-full right-2 bottom-6 hover:cursor-pointer hover:bg-spotify-green-2 flex items-center justify-center">
            <BsFillPlayFill className="text-black text-xl"></BsFillPlayFill>
          </div>
        )}
      </div>
      <div className="h-1/3 flex flex-col justify-center">
        <div className="text-white font-circularStdBold">{name}</div>
        <div className="text-spotify-text-color text-[12px] font-circularStdBook">
          {expl}
        </div>
      </div>
    </div>
  );
};

export default Album;
