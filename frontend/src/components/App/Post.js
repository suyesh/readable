import React, {Component} from 'react'
import * as Api from '../../utils/Api'
import Comment from './Comment'

class Post extends Component {
  state = {
    comments: []
  }

  componentDidMount = ()=> {
    Api.fetchPostComments(this.props.post[0].id).then((response) => this.setState({comments: response.data}))
  }

  render(){
    const post = this.props.post[0]
    return(
        <div className="card">
         <div className="card-body">
           <h4><b>{post.title}</b></h4>
           <p>{post.body}</p>
           <p className="comment-count">Comments</p>
          {this.state.comments.length > 0 &&
            this.state.comments.map((comment) => (
              <Comment comment={comment}/>
            ))
          }
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

    )
  }
}

export default Post
