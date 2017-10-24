import React from 'react'

class Posts extends React.Component {
  render(){
    return(
      <div className="posts">
        {
          this.props.posts.map((post) => (
            <div className="card">
             <div className="card-body">
               <h4><b>{post.title}</b></h4>
               <p>{post.body}</p>
               <p className="comment-count">{`${post.commentCount} ${post.commentCount > 1 ? 'Comments' : 'Comment'}`}</p>
             </div>
             <div className="card-vote">
               <div className="card-vote-items vote">
                 <div>
                 <i className="fa fa-thumbs-up" aria-hidden="true"></i>
               </div>
               <div className="vote-count">
                 {post.voteScore < 1 ? 0 : post.voteScore}
               </div>
               </div>

               <div className="card-vote-items vote">
                 <div>
                 <i className="fa fa-thumbs-down" aria-hidden="true"></i>
               </div>
               <div className="vote-count">
                 {post.voteScore < 1 ? post.voteScore : 0}
               </div>
               </div>
             </div>
           </div>
          ))
        }
      </div>
    )
  }
}


export default Posts
