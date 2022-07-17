import { useRef } from 'react';
import './App.css';
import VideoJS from './components/VideoJs/VideoJS';
import videojs from 'video.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondVideo from './components/SecondVideo/SecondVideo';

function App() {
  const playerRef = useRef(null);
 

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    poster:"https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    sources: [{
      src: './video1.mp4',
      type: 'video/mp4'
    }]
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };


  return (
    <div className="App">
    <VideoJS options={videoJsOptions} onReady={handlePlayerReady}></VideoJS>
    <SecondVideo></SecondVideo>
    </div>
  );
}

export default App;
