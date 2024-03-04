import React from "react";

import PlayListCard from "./PlayListCard";

const playlists = [
  {
    pic: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
    name: "Beğenilen Şarkılar",
  },
  {
    pic: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb89140a79120a2f5f56a02551/1/tr/default",
    name: "Daily Mix 1",
  },
  {
    pic: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb01c788a11415f322aa46e1b9/2/tr/default",
    name: "Daily Mix 2",
  },
  {
    pic: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebfc6c38014fb28d268ebd2395/4/tr/default",
    name: "Daily Mix 4",
  },
  {
    pic: "https://mosaic.scdn.co/640/ab67616d00001e0277ba24a2adbb15e888ab9a3eab67616d00001e02997d16e3a972c06a4cdfd716ab67616d00001e02bdf5b72bf436bd8348b33b09ab67616d00001e02f70a63ef6999efbdf62cc06a",
    name: "Turkish Slow",
  },
  {
    pic: "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb37b973b9b70bff9949789b10/tr",
    name: "Yeni Müzik Radarı",
  },
];

const PlayListCards = () => {
  return (
    <div>
      <div className="text-spotify-white ml-4 text-3xl font-circularStdBold">
        Günaydın
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 px-4 mt-4 h-fit w-full">
        {playlists.map((playlist, index) => (
          <PlayListCard
            key={index}
            pic={playlist.pic}
            name={playlist.name}
          ></PlayListCard>
        ))}
      </div>
    </div>
  );
};

export default PlayListCards;
