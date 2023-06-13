import api from './apiConfig'

// GET requests
export async function getPosts() {
  const response = await api.get('/post/')
  return response.data
}

// POST requests
export async function createPost(twuut, username) {
  const response = await api.post('/post/', {
    username, twuut
  })
  return response.data
}