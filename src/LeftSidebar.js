import React from "react";

import TopLeft from "./components/TopLeft";
import Library from "./components/Library";

const LeftSidebar = () => {
  return (
    <div className="col-start-1 col-end-2 ml-2 flex flex-col">
      <TopLeft></TopLeft>
      <Library></Library>
    </div>
  );
};

export default LeftSidebar;
