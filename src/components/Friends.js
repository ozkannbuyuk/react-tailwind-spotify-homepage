import React from "react";

import { AiOutlineUserAdd, AiOutlineClose } from "react-icons/ai";

import Friend from "./Friend";
import oneImage from "../assets/friends/1.jpg";
import twoImage from "../assets/friends/2.jpg";

const Friends = () => {
  return (
    <div className="friends px-6 h-[40rem] overflow-y-scroll">
      <div className="mt-8 flex items-center">
        <div className="w-1/2 text-white font-circularStdBold text-sm hover:cursor-default">
          Arkadaş Etkinliği
        </div>
        <div className="flex justify-end gap-3 w-1/2">
          <div className="w-7 h-7 hover:bg-spotify-bg-light-gray-1 rounded-full flex justify-center items-center">
            <AiOutlineUserAdd className="w-5 h-5 text-spotify-text-color hover:text-white hover:cursor-pointer"></AiOutlineUserAdd>
          </div>
          <div className="w-7 h-7 hover:bg-spotify-bg-light-gray-1 rounded-full flex justify-center items-center">
            <AiOutlineClose className="w-5 h-5 text-spotify-text-color hover:text-white hover:cursor-pointer"></AiOutlineClose>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Friend
          pic={oneImage}
          name="Kübra"
          song="her yanım yangın"
          artist="Tuğkan"
          album="her yanım yangın"
          time="2 dk."
        ></Friend>
        <Friend
          pic={twoImage}
          name="Salih"
          song="Kabe'de Hacılar"
          artist="Abdurrahman Önül"
          album="Kabe'de Hacılar İlahisi"
          time="3 dk."
        ></Friend>
        <Friend
          pic={oneImage}
          name="Kübra"
          song="her yanım yangın"
          artist="Tuğkan"
          album="her yanım yangın"
          time="2 dk."
        ></Friend>
        <Friend
          pic={twoImage}
          name="Salih"
          song="Kabe'de Hacılar"
          artist="Abdurrahman Önül"
          album="Kabe'de Hacılar İlahisi"
          time="3 dk."
        ></Friend>
        <Friend
          pic={oneImage}
          name="Kübra"
          song="her yanım yangın"
          artist="Tuğkan"
          album="her yanım yangın"
          time="2 dk."
        ></Friend>
        <Friend
          pic={twoImage}
          name="Salih"
          song="Kabe'de Hacılar"
          artist="Abdurrahman Önül"
          album="Kabe'de Hacılar İlahisi"
          time="3 dk."
        ></Friend>
        <Friend
          pic={oneImage}
          name="Kübra"
          song="her yanım yangın"
          artist="Tuğkan"
          album="her yanım yangın"
          time="2 dk."
        ></Friend>
        <Friend
          pic={twoImage}
          name="Salih"
          song="Kabe'de Hacılar"
          artist="Abdurrahman Önül"
          album="Kabe'de Hacılar İlahisi"
          time="3 dk."
        ></Friend>
        <Friend
          pic={oneImage}
          name="Kübra"
          song="her yanım yangın"
          artist="Tuğkan"
          album="her yanım yangın"
          time="2 dk."
        ></Friend>
        <Friend
          pic={twoImage}
          name="Salih"
          song="Kabe'de Hacılar"
          artist="Abdurrahman Önül"
          album="Kabe'de Hacılar İlahisi"
          time="3 dk."
        ></Friend>
      </div>
    </div>
  );
};

export default Friends;
