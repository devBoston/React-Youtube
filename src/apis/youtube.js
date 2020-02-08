import axios from 'axios';

const KEY = 'AIzaSyBhn3w7ro1HamZpwC-O36p-KLQx40oZq1A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
});
