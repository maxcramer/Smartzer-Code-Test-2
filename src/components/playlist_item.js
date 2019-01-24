import React from 'react';
import PropTypes from 'prop-types'

const PlaylistItem = (props) => {
  const { video, onVideoSelect, onVideoRemove } = props;
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;
  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <button onClick={() => onVideoRemove(video)}>X</button>
      <div className="video-list media">
        <div>
          <img className="media-object" src={imageUrl} alt={video.title}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
          <div className="media-heading">{video.snippet.thumbnails.default.url}</div>
          {/* <div classNxame="media-heading">{video.contentDetails.duration}</div> CANT GET DATA TO LOAD, WHY? */}
        </div>
      </div>
    </li>
  )
}
PlaylistItem.propTypes = {
  onVideoSelect: PropTypes.func.isRequired
};

export default PlaylistItem;
