import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Logo from './Logo.png'
import './VideoItem.css';

class App extends React.Component {
  state = {videos: [], selectedVideo: null };

componentDidMount() {
  this.onTermSubmit('funny cats')
}


  onTermSubmit = async term => {
      const response = await youtube.get('/search', {
        params: {
          q: term
        }
      });

      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
  };

onVideoSelect = video => {
  this.setState({ selectedVideo: video});
};

  render() {
    return (
    <div className="ui container">
    <br/>
      <img src={Logo} alt="logo" style={{width: 70, height: 50}}/>
      <SearchBar onFormSubmit={this.onTermSubmit}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="twelve wide column">
          <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="four wide column">
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
