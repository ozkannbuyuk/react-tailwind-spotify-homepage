import React from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";

const PlayingCover = ({ curPlayingName, curPlayingArtist, liked }) => {
  return (
    <div className="w-1/4 flex items-center">
      <div className="relative w-14 h-14 mx-4 hover:cursor-pointer">
        <SlArrowDown className="absolute right-0 mr-1 mt-1 p-1 rounded-full text-2xl text-spotify-text-color bg-spotify-bg-light-gray-2 hover:text-[25px] hover:text-white hover:bg-spotify-bg-light-gray-1" />
        <img
          className="rounded"
          src={
            "https://i.scdn.co/image/ab67616d00001e02d211f13f335658f732b9e410"
          }
          alt=""
        ></img>
      </div>
      <div className="flex flex-col justify-between gap-1 font-circularStdBook text-sm">
        <div className="text-white hover:underline hover:cursor-pointer">
          {curPlayingName}
        </div>
        <div className="text-spotify-text-color text-xs leading-1 hover:underline hover:cursor-pointer">
          {curPlayingArtist}
        </div>
      </div>
      <div className="text-spotify-text-color text-lg ml-6">
        {liked ? (
          <AiFillHeart className="text-spotify-green" />
        ) : (
          <AiOutlineHeart />
        )}
      </div>
    </div>
  );
};

export default PlayingCover;
