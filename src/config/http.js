import axios from "axios"  //pacote de requisiçoes http ao backend
import { getToken } from "./auth"
const api_local = "http//localhost:3001"

// Instância do cliente HTTP para as requisições
const http = axios.create({
  baseURL: process.env.REACT_APP_API || api_local, //variavel de ambiente || variave lde API local
})

// Padronizar requisições com json
http.defaults.headers["Content-type"] = "application/json" //configuracao de headers

// verificação se existe token
if (getToken()) {
  http.defaults.headers["x-auth-token"] = getToken();
}


http.interceptors.response.use(  //interceptador/gerenciador de requisições http
  (response) => response,  //callback
  (error) => {
    if (error.message === "Network Error" && !error.message) {
      alert("você está sem internet...reconecte !!!!!");
    }
    switch (error.response.status) {
      case 401:
        console.log("Token inválido...")
        break;
      case 404:
        console.log("Pagina não encontrada...")
        break;
      default:
        console.log(
          error.response.status,
          `aconteceu um erro ${error.response.status}`
        );
        break;
    }

    // axios.interceptors.response.eject(interceptors) // global
    return Promise.reject(error)
  }
)

export default http