import React from 'react';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import VideoPlayer from './component/video-player/video-player';
import './App.css';

library.add( faPlayCircle );

function App() {
  return (
    <div className="App">
      <VideoPlayer/>
    </div>
  );
}

export default App;
