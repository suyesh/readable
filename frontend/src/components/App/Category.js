import React from 'react'
import {NavLink} from 'react-router-dom'

const Category = (props) => (
  <div className="category">
  <NavLink to={`/${props.path}`} className="category-links" activeClassName="category-active">
      {props.name}
  </NavLink>
  </div>
)

export default Category
