import React from "react";

import { BiLibrary, BiPlus, BiRightArrowAlt } from "react-icons/bi";
import { GoSearch, GoTriangleDown } from "react-icons/go";

import Playlist from "./PlayList";

const Library = () => {
  return (
    <div className="rounded-lg bg-spotify-bg-gray w-full h-full">
      <div className="mt-4 text-spotify-text-color">
        <div className="h-8 ml-6 flex items-center font-circularStdBold">
          <div className="flex hover:text-white hover:cursor-pointer">
            <BiLibrary className="text-2xl"></BiLibrary>
            <div className="text-sm leading-7 ml-4">Kitaplığın</div>
          </div>
          <div className="flex justify-center items-center ml-[4.5rem] mr-2 w-8 h-8 hover:rounded-full hover:bg-spotify-bg-light-gray-3">
            <BiPlus className="text-2xl hover:text-white hover:cursor-pointer"></BiPlus>
          </div>
          <div className="flex justify-center items-center w-8 h-8 hover:rounded-full hover:bg-spotify-bg-light-gray-3">
            <BiRightArrowAlt className="text-2xl hover:text-white hover:cursor-pointer"></BiRightArrowAlt>
          </div>
        </div>

        <div className="library mt-4 mr-6 gap-2 flex whitespace-nowrap overflow-x-scroll font-circularStdMed">
          <div className="rounded-xl ml-5 px-2 py-1 bg-spotify-bg-light-gray-1 text-sm hover:text-white hover:cursor-pointer hover:bg-spotify-bg-light-gray-2">
            Çalma Listeleri
          </div>
          <div className="rounded-xl px-2 py-1 bg-spotify-bg-light-gray-1 text-sm hover:text-white hover:cursor-pointer hover:bg-spotify-bg-light-gray-2">
            Podcastler ve Programlar
          </div>
          <div className="rounded-xl px-2 py-1 bg-spotify-bg-light-gray-1 text-sm hover:text-white hover:cursor-pointer hover:bg-spotify-bg-light-gray-2">
            İndirilenler
          </div>
          <div className="rounded-xl px-2 py-1 bg-spotify-bg-light-gray-1 text-sm hover:text-white hover:cursor-pointer hover:bg-spotify-bg-light-gray-2">
            Sanatçılar
          </div>
        </div>

        <div className="library h-[30rem] overflow-y-scroll">
          <div className="flex justify-between text-spotify-text-color mt-4">
            <div className="flex justify-center items-center ml-5 w-8 h-8 hover:rounded-full hover:cursor-pointer hover:bg-spotify-bg-light-gray-2">
              <GoSearch className="text-xl"></GoSearch>
            </div>
            <div className="mr-2 flex font-circularStdBook text-sm justify-center items-center hover:text-white hover:cursor-pointer">
              Yakın Tarihli
              <GoTriangleDown className="text-2xl ml-2"></GoTriangleDown>
            </div>
          </div>
          <Playlist
            coverPicture={"https://misc.scdn.co/liked-songs/liked-songs-64.png"}
            playlistName="Beğenilen Şarkılar"
            playlistType="Çalma Listesi"
            count="72"
          ></Playlist>
        </div>
      </div>
    </div>
  );
};

export default Library;
