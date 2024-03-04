import React from "react";

import Album from "./Album";

const Suggestion = ({ headline }) => {
  return (
    <div className="mt-6 ml-4">
      <div className="flex relative">
        <div className="text-spotify-white font-circularStdBold text-2xl hover:cursor-pointer hover:underline">
          {headline}
        </div>
        <div className="absolute bottom-0 right-5 text-sm text-spotify-text-color font-circularStdBold hover:underline hover:cursor-pointer">
          Tümünü göster
        </div>
      </div>
      <div className="flex justify-between mr-4 mt-4 h-fit">
        <Album
          name="Pop Mix"
          expl="Derya Uluğ, Merve Özbey ve daha fazlası"
          pic={
            "https://seed-mix-image.spotifycdn.com/v6/img/pop/7A6T0nTpXnPXDUGM1yEjEj/tr/default"
          }
        ></Album>
        <Album
          name="Hip Hop Mix"
          expl="Kubilay Aka, Taladro, UZI ve daha fazlası"
          pic={
            "https://seed-mix-image.spotifycdn.com/v6/img/rock/3Z814BstLaKbLqKHXsht8O/tr/default"
          }
        ></Album>
        <Album
          name="Rock Mix"
          expl="Gripin, Gece Yolcuları ve daha fazlası"
          pic={
            "https://seed-mix-image.spotifycdn.com/v6/img/moody/2PPVH8rUFlN2zzJrrP8Cjg/tr/default"
          }
        ></Album>
        <Album
          name="House Mix"
          expl="INJI ve daha fazlası"
          pic={
            "https://seed-mix-image.spotifycdn.com/v6/img/house/0Z4Ir8usNVcAdCSQl0fQki/tr/default"
          }
        ></Album>
        <Album
          name="Sakin Mix"
          expl="Eminem, Orange Blossom ve daha fazlası"
          pic={
            "https://seed-mix-image.spotifycdn.com/v6/img/chill/7dGJo4pcD2V6oG8kP0tJRR/tr/default"
          }
        ></Album>
      </div>
    </div>
  );
};

export default Suggestion;
