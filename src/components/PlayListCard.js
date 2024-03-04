import React, { useState } from "react";

import { BsFillPlayFill } from "react-icons/bs";

const PlaylistCard = ({ key, pic, name }) => {
  const [onCard, setOnCard] = useState(false);

  const handleEnter = () => {
    setOnCard(true);
  };

  const handleLeave = () => {
    setOnCard(false);
  };

  return (
    <div
      className="h-20 relative flex bg-spotify-bg-light-gray-1 hover:bg-spotify-bg-light-gray-4 hover:cursor-pointer rounded-md"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img
        alt=""
        src={pic}
        className="w-20 h-full object-cover rounded-l-md"
      ></img>
      <div className="text-spotify-white font-circularStdBold my-auto ml-4 w-40">
        {name}
      </div>
      {onCard && (
        <div className="absolute w-11 h-11 right-4 bottom-[18px] hover:w-12 hover:h-12 hover:bottom-[16px] hover:right-[14px] hover:bg-spotify-green-2 rounded-full shadow-lg bg-spotify-green-1 flex items-center justify-center">
          <BsFillPlayFill className="text-2xl"></BsFillPlayFill>
        </div>
      )}
    </div>
  );
};

export default PlaylistCard;
