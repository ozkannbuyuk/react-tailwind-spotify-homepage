import React from "react";

import Header from "./components/Header";
import PlayListCards from "./components/PlayListCards";
import Suggestions from "./components/Suggestions";

const Feed = () => {
  return (
    <div className="feed col-start-2 col-end-5 rounded-lg bg-gradient-to-b from-[#222222] from-0% via-[#121212] via-40% to-[#121212] to-100% overflow-x-hidden overflow-y-scroll h-[40rem]">
      <Header></Header>
      <PlayListCards></PlayListCards>
      <Suggestions></Suggestions>
    </div>
  );
};

export default Feed;
