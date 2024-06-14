import React, { useState } from "react";
import VoteButtons from "./VoteButtons";
import Comments from "./Comments.js";

function VideoDetails({video, updateVideoData}) {
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [showComments, setShowComments] = useState(true)

  const updateVotes = (event) => {
    let newVoteCount = Number(event.target.value) + 1
    let newVotes

    if(event.target.id === "up-vote"){
      newVotes = {
        upvotes: newVoteCount
      }
      setUpVotes(newVoteCount)
    } else {
      newVotes = {
        downvotes: newVoteCount
      }
      setDownVotes(newVoteCount)
    }

    updateVideoData(newVotes)
  }

  return (
    <>
      <div className="video-details">
        <h2>{video.title}</h2>
        <p>{video.views} views | {video.createdAt}</p>
        <VoteButtons votes={[upVotes, downVotes]} updateVotes={updateVotes}/>
        <button id="hide-comments" value={showComments}
          onClick={() => setShowComments(!showComments)}
        > {showComments ? "Hide Comments" : "Show Comments"}</button>
      </div>
      <Comments comments={video.comments} showComments={showComments}/>
    </>
  )
}

export default VideoDetails;
