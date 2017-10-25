import React from 'react'
import {NavLink} from 'react-router-dom'
import Category from './Category'

const NavBar = (props) => (
  <div className="category-container">
    <div className="category">
      <NavLink to="/" className="category-links" activeClassName="category-active">
          Home
      </NavLink>
    </div>

    {props.categories && props.categories.map((category) => (
      <Category key={category.name} name={category.name} path={category.path} setSelected={this.setSelected}/>
    ))}

    <div className="category">
      <span onClick={() => props.toggleSortMenu()}>sort<i className="fa fa-sort" aria-hidden="true"></i></span>
      {props.sortMenu && <div className="sort-menu">
        <div className="sort-list">
          <div onClick={() => props.sortByVoteScore()}>Votes</div>
          <div onClick={() => props.sortBytimeStamp()}>Date</div>
          <div onClick={() => props.disableSort()}>Off</div>
        </div>
      </div>}
    </div>

    <div className="category">
      <NavLink to="/add" className="category-links" activeClassName="category-active">
      <i className="fa fa-plus" aria-hidden="true"></i><span>Add Post</span>
      </NavLink>
    </div>
    
  </div>
)

export default NavBar
