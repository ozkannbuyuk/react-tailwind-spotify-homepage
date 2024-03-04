import React from "react";

import { GoHomeFill, GoSearch } from "react-icons/go";

const TopLeft = () => {
  return (
    <div className="flex flex-col justify-center gap-4 text-spotify-text-color rounded-lg mb-2 bg-spotify-bg-gray w-full h-32">
      <div className="flex flex-row hover:text-white hover:cursor-pointer font-circularStdBold">
        <GoHomeFill className="ml-6 mr-4 text-2xl"></GoHomeFill>
        <div className="text-sm leading-7">Ana sayfa</div>
      </div>
      <div className="flex flex-row hover:text-white hover:cursor-pointer font-circularStdBold">
        <GoSearch className="ml-6 mr-4 text-2xl"></GoSearch>
        <div className="text-sm leading-7">Ara</div>
      </div>
    </div>
  );
};

export default TopLeft;
