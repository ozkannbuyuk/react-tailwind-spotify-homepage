import React from "react";

import "./index.css";

import LeftSidebar from "./LeftSidebar";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="grid grid-cols-5 gap-2 w-screen h-[39.33rem]">
        <LeftSidebar></LeftSidebar>
        <Feed></Feed>
        <RightSidebar></RightSidebar>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
