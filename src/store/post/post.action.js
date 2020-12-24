import { getPostsService, getCountPostsService, createPostService } from '../../services/posts'
import { toastr } from "react-redux-toastr"

export const POST_LOADING = "SIGN"
export const GET_POSTS = "SIGN_LOADING"
export const CREATE_POST = "CREATE_POST"

export const getPostAll = (page, limit) => {
  return async (dispatch) => {
    dispatch({ type: POST_LOADING, status: true})
    const count = await getCountPostsService()
    const posts = await getPostsService(page, limit)

    dispatch({ type: GET_POSTS, data: posts.data, total: count })

  };
};

export const createPost = (form) => {
  return async (dispatch) => {
    const post = {   //recebe os dados do cadastro e prepara novo objeto a ser cadastrado 
        "author": "Felipe Montenegro",
        "title": form.title,
        "description": form.description,
        "created_at": "Sunday, January 10, 2016 6:53 PM",
        "avatar": "http://placehold.it/300x300",
      }
      dispatch({ type: POST_LOADING, status: true})  // dispatch pro loading
      try {
        await createPostService(post)  // manda o cadastro 

        dispatch({ type: CREATE_POST, post })  // manda para store
        toastr.success('Sucesso!', 'Cadastro de postagem feito com sucesso')
        getPostAll(1, 7)
      } catch(error) {
        toastr.error('Atenção! insucesso no Cadastro de postagem')
      }
    }
  }

