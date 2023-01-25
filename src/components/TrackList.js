import React, { useEffect } from "react";
import Track from "./Track";

export default function TrackList({ setToken, tracks }) {

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("spotify-monthly-favorites-token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("spotify-monthly-favorites-token", token)
      setToken(token);
    }
  }, []);

  const trackComponents = tracks.map((track) => <Track {...track} key={track.id} />);

  return (
    <ul className="tracks__list">
      {React.Children.toArray(trackComponents)}
    </ul>
  );
}
