import * as actionType from '../actionTypes'

const initialState = {
  categories: [],
  posts: []
}

export default function Readable(state= initialState, action) {
  switch(action.type){
    case actionType.GET_CATEGORIES:
      return ({
        ...state, categories: action.categories
      });
    case actionType.GET_POSTS:
      return({
        ...state, posts: action.posts
      });
    default:
      return state;
  }
}
