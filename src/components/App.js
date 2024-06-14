import React, { useState } from "react";

import Video from "./Video.js";

import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);
  const [videoData, setVideoData] = useState(video)

  const updateVideoData = (newData) => {
    console.log(newData)
  }

  return (

    <div className="App">
      <Video video={videoData}/>
      <VideoDetails
        title={videoData.title}
        createdAt={videoData.createdAt}
        views={videoData.views}
        totalUpVotes={videoData.upvotes}
        totalDownVotes={videoData.downvotes}
        updateVideoData={updateVideoData}
      />
      <Comments comments={videoData.comments}/>
    </div>
  );
}

export default App;
