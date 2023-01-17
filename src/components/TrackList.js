import React from "react";
import Track from "./Track";

export default function TrackList(props) {

  return (
    <ul className="tracks__list">
      {React.Children.toArray(
        props.tracks.map((track) => <Track {...track} key={track.id} />)
      )}
    </ul>
  );
}
