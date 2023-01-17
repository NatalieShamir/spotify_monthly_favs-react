import Main from "./Main";
import { api } from "../utils/Api";
import { useState } from 'react';

export default function App() {

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

  /* 
    const [tracks, setTracks] = React.useState([]);
  
    useEffect(() => {
      api
        .getTrackList()
        .then((res) => {
          setTracks(res);
        })
        .catch(console.log);
    }, []);
   */

  return (
    <div className="page">
      <Main tracks={tracks} />
    </div>
  );
}
