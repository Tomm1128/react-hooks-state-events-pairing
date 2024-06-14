import React, { useState } from "react";

function VideoDetails({video, updateVideoData, showComments, setShowComments}) {
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)

  const updateUpVotes = (event) => {
    const newUpVoteValue = Number(event.target.value) + 1
    const newVotes = {
      upvotes: newUpVoteValue
    }
    setUpVotes(newUpVoteValue)
    updateVideoData(newVotes)
  }

  const updateDownVotes = (event) => {
    const newDownVoteValue = Number(event.target.value) - 1
    const newVotes = {
      downvotes: newDownVoteValue
    }
    setDownVotes(newDownVoteValue)
    updateVideoData(newVotes)
  }

  return (
    <div className="video-details">
      <h2>{video.title}</h2>
      <p>{video.views} views | {video.createdAt}</p>
      <button id="up-vote" value={upVotes} onClick={updateUpVotes}>{upVotes} 👍</button>
      <button id="down-vote" value={downVotes} onClick={updateDownVotes}>{downVotes} 👎</button>
      <button id="hide-comments" value={showComments} onClick={() => setShowComments(!showComments)}>Hide Comments</button>
    </div>
  )
}

export default VideoDetails;
