const TOKEN_KEY = "2devs_connector"

const getToken = () => {      //obter o token
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
  if (data && data.token) {
    return data.token
  }
  return false;
}
const getUser = () => {    //trazer a instajcia de usuario, dentro da mesma requisicao do token
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
  if (data && data.user) {
    return data.user
  }
  return false
}

const saveLocalStorage = (data) =>       
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data))  //transofmra stringy em objeto

const removeToken = () => localStorage.removeItem(TOKEN_KEY)

const isAuthenticated = () => {
  // pegar dentro do localstage
  // validar o token
  // retornar se true ou false
  return getToken() !== false
}

export { isAuthenticated, getToken, getUser, saveLocalStorage, removeToken }
