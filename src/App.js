import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import Playlist from './components/playlist';
const API_KEY = 'AIzaSyDzQhfj61Bh6P7A-q4-b9ikX77nMf-wHTA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      playlist: []
    };

    this.videoSearch('Smartzer Wired');
  }

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  addFavouriteVideo = (video) => {
    this.setState({
      playlist: [...this.state.playlist, video]
    })
  };

  removeFavouriteVideo = (video) => {
    this.setState({
      playlist: this.state.playlist.filter(item => item !== video)
    })
  };

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={(searchTerm) => this.videoSearch(searchTerm)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(userSelected) => this.setState({ selectedVideo: userSelected })}
          videos={this.state.videos}
          addFavouriteVideo={this.addFavouriteVideo}
        />
        <Playlist onVideoRemove={this.removeFavouriteVideo} onVideoSelect={(userSelected) => this.setState({ selectedVideo: userSelected })} videos={this.state.playlist} />
      </div>
    );
  }
}

export default App;
