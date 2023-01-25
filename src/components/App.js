import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { api } from "../utils/Api";
import Login from "./Login";
import TrackList from "./TrackList";

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
      <Switch>
        <Route exact path="/">
          <Login token={token} setToken={setToken} />
        </Route>
        <Route path="/track-list">
          <TrackList tracks={tracks} />
        </Route>
      </Switch>
    </div>
  );
}
