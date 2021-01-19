import axios from "axios"  //pacote de requisiçoes http ao backend
import { getToken } from "./auth"

const http = axios.create({
  baseURL: `https://redevapi.herokuapp.com`
})

http.defaults.headers["Content-type"] = "application/json" //configuracao de headers

if (getToken()) {
  http.defaults.headers["x-auth-token"] = getToken();
}

http.interceptors.response.use(  //interceptador/gerenciador de requisições http
  (response) => response,  //callback
  (error) => {
    if (error.message === "Network Error" && !error.message) {
      console.log("você está sem internet...reconecte !!!!!");
      return Promise.reject();
    }
    switch (error?.response?.status) {
      case 401:
        console.log("Token inválido...")
        break;
      case 404:
        console.log("Pagina não encontrada...")
        break;
      default:
        break;
    }
    return Promise.reject(error)
  }
);

export default http