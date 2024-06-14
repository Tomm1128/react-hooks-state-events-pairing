import React, { useState } from "react"
import CommentCard from "./CommentCard"

function Comments({comments, showComments}) {
  const [commentList, setCommentList] = useState(comments)

  const deleteComment = (event) => {
    const commentId = Number(event.target.parentElement.id)
    const newComments = commentList.filter((comment) => comment.id !== commentId)

    setCommentList(newComments)
  }

  const commentCards = commentList.map((comment) => {
    return (
    <CommentCard
      key={comment.id}
      commentId={comment.id}
      comment={comment.comment}
      user={comment.user}
      deleteComment={deleteComment}
    />)
  })

  return (
    <div className="comments" style={{display: showComments ? "" : "none"}}>
      <h2>{commentList.length} Comments</h2>
      {commentCards}
    </div>
  )
}

export default Comments
