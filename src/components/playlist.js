import React from 'react';
import PropTypes from 'prop-types'
import VideoListItem from './video_list_item';
import PlaylistItem from './playlist_item';

const Playlist = (props) => {
  const { videos, onVideoSelect, onVideoRemove } = props;

  const playlistItems = videos.map((video) => {
    return (
      <PlaylistItem video={video} onVideoSelect={onVideoSelect} onVideoRemove={onVideoRemove}/>
    )
  });

  return (
    <ul className="col-md-4 list-group">
      <h3>View Videos</h3>
      {playlistItems}
    </ul>
  );
};

Playlist.propTypes = {
  onVideoSelect: PropTypes.func.isRequired
};

export default Playlist;
