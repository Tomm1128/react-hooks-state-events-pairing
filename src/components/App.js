import React, { useState } from "react"

import Video from "./Video.js"
import VideoDetails from "./VideoDetails.js"

import video from "../data/video.js"

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
        video={videoData}
        updateVideoData={updateVideoData}
      />
    </div>
  )
}

export default App
