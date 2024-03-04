import React from "react";

import Friends from "./components/Friends";

const RightSidebar = () => {
  return (
    <div className="col-start-5 mr-2 rounded-lg bg-spotify-bg-gray">
      <Friends></Friends>
    </div>
  );
};

export default RightSidebar;
