import React from "react";

function VideoDetails({title, createdAt, views, upVotes, downVotes}) {

  return (
    <div className="video-details">
      <h2>{title}</h2>
      <p>{views} views | {createdAt}</p>
      <button id="up-vote">{upVotes} 👍</button>
      <button id="down-vote">{downVotes} 👎</button>
      <button id="hide-comments">Hide Comments</button>
    </div>
  );
}

export default VideoDetails;
