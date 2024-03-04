import React from "react";

import { FiMusic } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

const Friend = ({ pic, name, song, artist, album, time }) => {
  return (
    <div className="h-16 mt-4 flex gap-4">
      <div className="w-1/4 h-full">
        <img
          alt=""
          src={pic}
          className="w-10 h-10 rounded-full object-cover"
        ></img>
      </div>
      <div className="w-full h-full flex flex-col text-xs text-spotify-bg-light-gray-5 font-circularStdBold whitespace-nowrap overflow-hidden">
        <div className="text-spotify-text-color hover:text-white hover:underline hover:cursor-pointer">
          {name}
        </div>
        <div className="text-[0.7rem] flex items-center">
          {song}
          <BsDot className="ml-1 mr-1"></BsDot>
          {artist}
        </div>
        <div className="text-[0.7rem] flex items-center">
          <FiMusic className="mr-1"></FiMusic>
          {album}
        </div>
      </div>
      <div className="w-1/6 h-full text-xs text-spotify-text-color font-circularStdBold whitespace-nowrap">
        {time}
      </div>
    </div>
  );
};

export default Friend;
