import React from "react";

import { AiOutlinePlaySquare, AiOutlineExpandAlt } from "react-icons/ai";
import { TbMicrophone2, TbDevices2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { BsFillVolumeDownFill } from "react-icons/bs";

const PlayingOptions = () => {
  return (
    <div className="w-1/4 text-xl mr-4 gap-3 text-spotify-bg-light-gray-5 flex justify-end items-center">
      <AiOutlinePlaySquare className="hover:text-white hover:cursor-pointer"></AiOutlinePlaySquare>
      <TbMicrophone2 className="hover:text-white hover:cursor-pointer"></TbMicrophone2>
      <HiOutlineQueueList className="hover:text-white hover:cursor-pointer"></HiOutlineQueueList>
      <TbDevices2 className="hover:text-white hover:cursor-pointer"></TbDevices2>
      <BsFillVolumeDownFill className="hover:text-white hover:cursor-pointer"></BsFillVolumeDownFill>
      <div>
        <div className="relative w-24 h-10 flex items-center">
          <div className="w-full h-1 bg-spotify-bg-light-gray-4">
            <div className="h-full bg-spotify-green w-10"></div>
          </div>
          <div className="absolute w-3 h-3 rounded-full bg-white left-10"></div>
        </div>
      </div>
      <AiOutlineExpandAlt className="hover:text-white hover:cursor-pointer"></AiOutlineExpandAlt>
    </div>
  );
};

export default PlayingOptions;
