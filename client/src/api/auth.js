import api from './apiConfig'

const LOCALSTORAGE_KEY = 'token'

export async function signin(username, password) {
  // Make request to singin user to retrieve a token
  const response = await api.post('/auth/signin', {
      username, password
  })

  // Put the token on localstorage, for 30min (duration set in server)
  localStorage.setItem(LOCALSTORAGE_KEY, response.data.token)

  return response.data
}

export async function signup(username, password) {
  const response = await api.post('/auth/signup', {
      username, password
  })

  return response.data
}