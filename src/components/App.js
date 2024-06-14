import React, { useState } from "react";

import Video from "./Video.js";

import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);
  const [videoData, setVideoData] = useState(video)

  return (

    <div className="App">
      <Video video={videoData}/>
    </div>
  );
}

export default App;
