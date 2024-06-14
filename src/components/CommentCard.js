import React from "react";

function CommentCard({comment, user}) {

  return (

    <div className="comment">
      <h3>{user}</h3>
      <p>{comment}</p>
    </div>
  );
}

export default CommentCard;
