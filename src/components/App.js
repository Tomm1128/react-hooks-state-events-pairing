import React, { useState } from "react";

import Video from "./Video.js";

import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
import Comments from "./Comments.js";

function App() {
  const [videoData, setVideoData] = useState(video)

  const updateVideoData = (newVotes) => {
    const votesKey = Object.keys(newVotes)[0]
    const value = Object.values(newVotes)[0]
    const newVotesData = {
      ...videoData,
      [votesKey] : value
    }
    setVideoData(newVotesData)
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
