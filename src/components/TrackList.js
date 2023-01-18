import React from "react";
import Track from "./Track";

export default function TrackList(props) {

  const trackComponents = props.tracks.map((track) => <Track {...track} key={track.id} />);
  return (
    <ul className="tracks__list">
      {React.Children.toArray(trackComponents)}
    </ul>
  );
}
