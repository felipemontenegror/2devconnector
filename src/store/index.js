import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import multi from "redux-multi"

import SignReducer from "./Sign/sign.reducer"
import PostReducer from "./post/post.reducer"

// modularizações dos reduces
const reducers = combineReducers({
  auth: SignReducer,
  post: PostReducer
})

// middlewares de confifurações do projeto
const middleware = [thunk, multi]

// compose que junta os middlewares e ferramentas de debug
const compose = composeWithDevTools(applyMiddleware(...middleware))

// criação da store
const store = createStore(reducers, compose);

export default store

// ---------------------------
