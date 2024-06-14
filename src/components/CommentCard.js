import React, { useState } from "react";
import VoteButtons from "./VoteButtons";

function CommentCard({comment, user}) {
const [commentUpVote, setCommentUpVote] = useState(0)
const [commentDownVote, setCommentDownVote] = useState(0)

const updateCommentVotes = (event) => {
  let newVoteCount = Number(event.target.value) + 1
  if(event.target.id === "up-vote"){
    setCommentUpVote(newVoteCount)
  } else {
    setCommentDownVote(newVoteCount)
  }
}

  return (
    <div className="comment">
      <h3>{user}</h3>
      <p>{comment}</p>
      <VoteButtons
        votes={[commentUpVote, commentDownVote]}
        updateVotes={updateCommentVotes}
        thumbsUp={"👍"}
        thumbsDown={"👎"}
      />
    </div>
  );
}

export default CommentCard;
