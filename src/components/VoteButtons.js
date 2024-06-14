import React from "react"

function VoteButtons({ votes, updateVotes}) {
  const [upVotes, downVotes] = votes

  return (
    <>
      <button id="up-vote" value={upVotes} onClick={updateVotes}>{upVotes} 👍</button>
      <button id="down-vote" value={downVotes} onClick={updateVotes}>{downVotes} 👎</button>
    </>
  )
}

export default VoteButtons
