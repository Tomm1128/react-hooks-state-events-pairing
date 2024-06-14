import React, { useState } from "react";

function VideoDetails({title, createdAt, views, totalUpVotes, totalDownVotes, updateVideoData}) {
  const [upVotes, setUpVotes] = useState(totalUpVotes)
  const [downVotes, setDownVotes] = useState(totalDownVotes)

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
      <h2>{title}</h2>
      <p>{views} views | {createdAt}</p>
      <button id="up-vote" value={upVotes} onClick={updateUpVotes}>{upVotes} 👍</button>
      <button id="down-vote" value={downVotes} onClick={updateDownVotes}>{downVotes} 👎</button>
      <button id="hide-comments">Hide Comments</button>
    </div>
  );
}

export default VideoDetails;
