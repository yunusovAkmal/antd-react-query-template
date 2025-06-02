const TOKEN_KEY = 'token'

const getToken = () => localStorage.getItem(TOKEN_KEY)

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

const clearStorage = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export { clearStorage, getToken, setToken }
