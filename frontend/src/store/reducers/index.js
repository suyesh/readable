import * as actionType from '../actionTypes'

export default function Readable(state= {}, action) {
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
