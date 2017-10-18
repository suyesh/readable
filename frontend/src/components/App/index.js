import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions'
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.props.getCategories()
    this.props.getAllPosts()
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({readable}) => ({categories: readable.allCategories, allPosts: readable.allPosts})

const mapDispatchToProps = (dispatch) => {
  return{
    getCategories: () => dispatch(actions.getAllCategories()),
    getAllPosts: () => dispatch(actions.getAllPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);