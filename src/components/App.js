import Main from "./Main";
import { api } from "../utils/Api";
import { useState } from 'react';

export default function App() {

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
