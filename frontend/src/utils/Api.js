import axios from 'axios'
import {toastr} from 'react-redux-toastr'

const ApiUrl = 'http://localhost:3001/'

const headers = { headers: { 'Authorization': 'whatever-you-want' }}

export const fetchCategories = () => {
  let categories = axios.get(`${ApiUrl}categories`, {
    ...headers
  })
  return categories
}

export const fetchPosts = () => {
  let posts = axios.get(`${ApiUrl}posts`, {
    ...headers
  })
  return posts
}

export const createPosts = (id, timeStamp, title, body, author, category) => {
  let post = axios.post(`${ApiUrl}posts`, {
    params: {
      id: id,
      timestamp: timeStamp,
      title: title,
      body: body,
      author: author,
      category: category
    },
    ...headers
  })
  return post
}
