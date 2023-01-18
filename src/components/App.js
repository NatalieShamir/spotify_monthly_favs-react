import Main from "./Main";
import { api } from "../utils/Api";
import { useState } from 'react';

export default function App() {
  const CLIENT_ID = "+++++++++++++++++++++++++++++"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [tracks, setTracks] = React.useState([]);

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
      <Main tracks={tracks} />
    </div>
  );
}
