import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './playlist';

class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteVideos: []
    };
  }

  
  render() {
    const video = this.props.video;
    const onUserSelected = this.props.onUserSelected;
    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;

    const addFavouriteVideo = this.props.addFavouriteVideo;

    return (
      <li onClick={() => onUserSelected(video)} className="list-group-item">
        <button onClick={() => addFavouriteVideo(video)}>+</button>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} alt={video.title} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
