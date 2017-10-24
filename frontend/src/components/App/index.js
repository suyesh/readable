import React, { Component } from 'react';
import {connect} from 'react-redux';
import Posts from './Posts'
import {Route, withRouter, NavLink} from 'react-router-dom'
import * as actions from '../../store/actions'
import Category from './Category'
import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.props.getCategories()
    this.props.getAllPosts()
  }

  sortCategories = (category = null) => {
    let posts =  category !== null ? this.props.posts.filter((post) => post.category === category) : this.props.posts
    return posts
  }

  render() {
    return (
      <div>
        <div className="category-container">
          <div className="category">
            <NavLink to="/" className="category-links" activeClassName="category-active">
                Home
            </NavLink>
          </div>
          {this.props.categories && this.props.categories.map((category) => (
            <Category key={category.name} name={category.name} path={category.path} setSelected={this.setSelected}/>
          ))}
        </div>
         <div className="container">
           <Route path="/" exact render={({match}) => <Posts posts={this.sortCategories(null)}/>}/>
           <Route path="/:category" exact render={({match}) => <Posts params={match.params.category} posts={this.sortCategories(match.params.category)}/>}/>
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
