export default function Track() {
  return (
    <a className="track__item">
      <span className="track__order-number">1</span>
      <span className="track__info">
        <span
          className="track__image"
          title="cover image of the album featuring the track or an image of the single cover if the track was released as a single"
        ></span>
        <span className="track__summary">
          <span className="track__artist">The Wiggles</span>
          <span className="track__separator">●</span>
          <span className="track__title">Hot Potato</span>
        </span>
      </span>
    </a>
  );
}
