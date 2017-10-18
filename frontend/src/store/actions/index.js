import * as actionTypes from '../actionTypes'
import * as Api from '../../utils/Api'
import {toastr} from 'react-redux-toastr'

export const updateCategories = categories => ({ type: actionTypes.GET_CATEGORIES, categories });

export const updatePosts = posts => ({ type: actionTypes.GET_POSTS, posts });

export const createPost = post => ({ type: actionTypes.CREATE_POST, post });

export const getAllCategories = () => (dispatch) => {
  Api.fetchCategories()
    .then((response) => dispatch(updateCategories(response.data.categories)))
    .catch((err) => toastr.error(`categories could not load`, 'Error while Fetching categories from api'))
}

export const getAllPosts = () => (dispatch) => {
  Api.fetchPosts()
    .then((response) => dispatch(updatePosts(response.data)))
    .catch((err) => toastr.error(`Posts could not load`, 'Error while Fetching Posts from api'))
}
