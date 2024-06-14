import React, { useState } from "react";
import VoteButtons from "./VoteButtons";

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

  const updateVotes = (event) => {
    let newVoteCount
    let newVotes
    if(event.target.id === "up-vote"){
      newVoteCount = Number(event.target.value) + 1
      newVotes = {
        upvotes: newVoteCount
      }
      setUpVotes(newVoteCount)
    } else {
      newVoteCount = Number(event.target.value) - 1
      newVotes = {
        downvotes: newVoteCount
      }
      setDownVotes(newVoteCount)
    }

    updateVideoData(newVotes)
  }

  return (
    <div className="video-details">
      <h2>{video.title}</h2>
      <p>{video.views} views | {video.createdAt}</p>
      <VoteButtons
        votes={[video.upvotes, video.downvotes]}
        updateVotes={updateVotes}
        thumbsUp={"👍"}
        thumbsDown={"👎"}
      />
      <button id="hide-comments" value={showComments} onClick={() => setShowComments(!showComments)}>Hide Comments</button>
    </div>
  )
}

export default VideoDetails;
