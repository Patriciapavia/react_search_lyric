import React from "react";
import { Link } from "react-router-dom";
const Track = (props) => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb4 shadow-sm">
        <div className="card-body">
          <h5>Artist:{track.artist_name}</h5>
          <p className="card-text">
            <strong>Song:</strong>:{track.track_name}
          </p>
          <p className="card-text">
            <strong>Album:</strong>:{track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-info btn-block"
          >
            Show lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
