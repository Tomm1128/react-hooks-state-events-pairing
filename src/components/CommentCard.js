import React, { useState } from "react"
import VoteButtons from "./VoteButtons"

function CommentCard({commentId, comment, user, deleteComment}) {
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
    <div className="comment" id={commentId}>
      <h3>{user}</h3>
      <p>{comment}</p>
      <VoteButtons votes={[commentUpVote, commentDownVote]} updateVotes={updateCommentVotes}/>
      <button onClick={deleteComment}>Remove Comment</button>
    </div>
  )
}

export default CommentCard
