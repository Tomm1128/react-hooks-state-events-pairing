import React from "react";

function VoteButtons({ votes, updateVotes, thumbsUp, thumbsDown}) {
  const [upVotes, downVotes] = votes

  return (
    <>
      <button id="up-vote" value={upVotes} onClick={updateVotes}>{upVotes} {thumbsUp}</button>
      <button id="down-vote" value={downVotes} onClick={updateVotes}>{downVotes} {thumbsDown}</button>
    </>
  );
}

export default VoteButtons;
