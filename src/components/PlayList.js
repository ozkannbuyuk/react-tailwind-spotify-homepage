import React from "react";

import { BsDot } from "react-icons/bs";

const Playlist = ({ coverPicture, playlistName, playlistType, count }) => {
  return (
    <div className="w-76 h-16 flex items-center pl-2 mx-2 hover:bg-spotify-bg-light-gray-1 hover:rounded-lg hover:cursor-pointer">
      <div>
        <img
          src={coverPicture}
          alt=""
          className="w-12 h-12 object-cover rounded"
        ></img>
      </div>

      <div className="flex flex-col text-sm text-white ml-4 whitespace-nowrap">
        <div className="font-circularStdBold">{playlistName}</div>
        <div className="flex flex-row font-circularStdMed text-sm text-spotify-text-color">
          <div className="flex">
            {playlistType} <BsDot className="text-xl" />
            {count ? count + " şarkı" : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
