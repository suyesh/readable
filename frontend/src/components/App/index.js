import React, { Component } from 'react';
import {connect} from 'react-redux';
import sortBy from 'sort-by'
import NavBar from './NavBar'
import Posts from './Posts'
import Post from './Post'
import {Route, withRouter} from 'react-router-dom'
import * as actions from '../../store/actions'
import './App.css';

class App extends Component {
  state = {
    voteSorted: false,
    timeStampSorted: false,
    sortMenu: false
  }

  componentDidMount = () => {
    this.props.getCategories()
    this.props.getAllPosts()
  }

  sortCategories = (category = null) => {
    let posts =  category !== null ? this.props.posts.filter((post) => post.category === category) : this.props.posts
    if (this.state.voteSorted) {
      return posts.sort(sortBy('-voteScore'))
    } else if (this.state.timeStampSorted){
      return posts.sort(sortBy('timestamp'))
    } else {
      return posts
    }
  }

  sortByVoteScore = () => {
    this.setState({voteSorted: true, sortMenu: false})
  }

  sortBytimeStamp = () => {
    this.setState({timeStampSorted: true, sortMenu: false})
  }

  disableSort = () => {
    this.setState({
      voteSorted: false,
      timeStampSorted: false,
      sortMenu: false
    })
  }

  toggleSortMenu = () => {
    this.setState({sortMenu: !this.state.sortMenu})
  }

  filterPost = (id) => {
    let post = this.props.posts.filter((post) => post.id === id)
    console.log(post)
    return post
  }

  render() {
    return (
      <div>
        <NavBar
          categories={this.props.categories}
          sortByVoteScore={this.sortByVoteScore}
          sortBytimeStamp={this.sortBytimeStamp}
          disableSort={this.disableSort}
          toggleSortMenu={this.toggleSortMenu}
          sortMenu={this.state.sortMenu}
        />
         <div className="container">
           <div className="posts">
             <Route
               path="/"
               exact
               render={({match}) => <Posts posts={this.sortCategories(null)}
               />}
             />

             <Route
               path="/:category"
               exact
               render={({match}) => <Posts params={match.params.category} posts={this.sortCategories(match.params.category)}
               />}
             />

             <Route
               path="/post/:id"
               exact
               render={({match}) => <Post post={this.filterPost(match.params.id)}/>}
             />
           </div>
         </div>
      </div>
    )
  }
}

const mapStateToProps = ({readable}) => ({categories: readable.categories, posts: readable.posts})

const mapDispatchToProps = (dispatch) => {
  return{
    getCategories: () => dispatch(actions.getAllCategories()),
    getAllPosts: () => dispatch(actions.getAllPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
