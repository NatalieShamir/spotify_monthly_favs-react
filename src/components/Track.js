export default function Track(props) {
  return (
    <a className="track__item">
      <span className="track__order-number">{props.index}</span>
      <span className="track__info">
        <span
          className="track__image"
          title="cover image of the album featuring the track or an image of the single cover if the track was released as a single"
          style={{ backgroundImage: `url(${props.albumImageUrl})` }}
        ></span>
        <span className="track__summary">
          <span className="track__artist">{props.artist}</span>
          <span className="track__separator">●</span>
          <span className="track__title">{props.title}</span>
        </span>
      </span>
    </a>
  );
}
