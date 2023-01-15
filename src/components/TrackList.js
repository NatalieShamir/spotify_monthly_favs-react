import React from "react";
import Track from "./Track";

export default function TrackList() {
  const tracks = [
    {
      index: "1",
      albumImageUrl:
        "https://i.scdn.co/image/ab67616d00004851bd2feaef7519dbfbc402201e",
      artist: "The Wiggles",
      title: "Hot Potato",
    },
    {
      index: "2",
      albumImageUrl:
        "https://i.scdn.co/image/ab67616d00004851318443aab3531a0558e79a4d",
      artist: "Taylor Swift",
      title: "All Too Well (Taylor's Version)",
    },
    {
      index: "3",
      albumImageUrl:
        "https://i.scdn.co/image/ab67616d0000485107823ee6237208c835802663",
      artist: "Arctic Monkeys",
      title: "The Car",
    },
  ];

  return (
    <ul className="tracks__list">
      {React.Children.toArray(
        tracks.map((track) => <Track {...track} key={track.id} />)
      )}
    </ul>
  );
}
