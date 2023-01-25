import React, { useState, useEffect } from "react";
import Track from "./Track";
import { api } from "../utils/Api";

export default function TrackList() {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);

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

  useEffect(() => {
    api
      .getTrackList()
      .then((res) => {
        setTracks(res);
      })
      .catch(console.log);
  }, []);


  const trackComponents = tracks.map((track) => <Track {...track} key={track.id} />);

  return (
    <ul className="tracks__list">
      {React.Children.toArray(trackComponents)}
    </ul>
  );
}
