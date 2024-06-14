import React from "react";
import CommentCard from "./CommentCard";

function Comments({comments, showComments}) {

  const commentCards = comments.map((comment) => {
    return <CommentCard key={comment.id} comment={comment.comment} user={comment.user}/>
  })

  return (

    <div className="comments" style={{display: showComments ? "" : "none"}}>
      <h2>{comments.length} Comments</h2>
      {commentCards}
    </div>
  );
}

export default Comments;
