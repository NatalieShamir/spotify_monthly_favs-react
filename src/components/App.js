import React, { useEffect, useState } from 'react';
import Main from "./Main";
import { api } from "../utils/Api";

export default function App() {
  const CLIENT_ID = "fd4f7c5a262e4313931a6038a17af7bc"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("");

  const [tracks, setTracks] = React.useState([]);

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
      setToken(token)
    }
  }, [])

  useEffect(() => {
    api
      .getTrackList()
      .then((res) => {
        setTracks(res);
      })
      .catch(console.log);
  }, []);


  return (
    <div className="page">
      <header className="header">
        <h1>Spotify Monthly Favorites</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
          to Spotify</a>
      </header>
      <Main tracks={tracks} />
    </div>
  );
}
