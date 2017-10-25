import React from 'react';

const Comment = (props) => (
  <div className="card comment">
   <div className="card-body">
     <h4>Author: <b>{props.comment.author}</b></h4>
     <p>{props.comment.body}</p>
   </div>
   <div className="card-vote">
     <div className="card-vote-items vote">
       <div>
       <i className="fa fa-thumbs-up" aria-hidden="true"></i>
     </div>
     <div className="vote-count">
       {props.comment.voteScore < 1 ? 0 : props.comment.voteScore}
     </div>
     </div>

     <div className="card-vote-items vote">
       <div>
       <i className="fa fa-thumbs-down" aria-hidden="true"></i>
     </div>
     <div className="vote-count">
       {props.comment.voteScore < 1 ? props.comment.voteScore : 0}
     </div>
     </div>
   </div>
 </div>
)

export default Comment
