import React from "react";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";

const Header = () => {
  return (
    <div className="sticky gap-2 flex items-center w-full h-16 rounded-t-lg text-spotify-bg-light-gray-6">
      <div className="ml-4 w-8 h-8 bg-[#131313] rounded-full flex justify-center items-center hover:cursor-pointer hover:text-white">
        <MdKeyboardArrowLeft className="text-3xl"></MdKeyboardArrowLeft>
      </div>
      <div className="w-8 h-8 bg-[#131313] rounded-full flex justify-center items-center hover:cursor-pointer hover:text-white">
        <MdKeyboardArrowRight className="text-3xl"></MdKeyboardArrowRight>
      </div>
      <div className="grow"></div>
      <div className="w-8 h-8 bg-[#131313] rounded-full flex justify-center items-center hover:cursor-pointer">
        <TbUsersGroup className="text-xl text-white"></TbUsersGroup>
      </div>

      <div className="mr-4 w-8 h-8 bg-[#131313] rounded-full flex justify-center items-center hover:cursor-pointer">
        <img
          className="rounded-full w-6 h-6 object-cover"
          alt=""
          src="https://lh3.googleusercontent.com/a/ACg8ocI2w25StzupLiQW1fbrWUIg8LLvCiWvIbC3twC4UKwjVLM=s83-c-mo"
        ></img>
      </div>
    </div>
  );
};

export default Header;
