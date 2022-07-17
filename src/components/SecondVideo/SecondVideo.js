import React, { useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/sea/index.css";
import VideoJS from "../VideoJs/VideoJS";

const SecondVideo = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/640px-The_Blue_Marble_%28remastered%29.jpg",
    sources: [
      {
        src: "./video2.mp4",
        type: "video/mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <div className="App">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady}></VideoJS>
    </div>
  );
};

export default SecondVideo;
