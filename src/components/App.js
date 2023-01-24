import React, { useEffect, useState } from 'react';
import Main from "./Main";
import { api } from "../utils/Api";
import Login from "./Login";

export default function App() {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);

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
      <Login token={token} setToken={setToken} />
      <Main tracks={tracks} />
    </div>
  );
}
