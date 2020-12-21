import { getPostsService } from '../../services/posts'
export const POST_LOADING = "SIGN"
export const GET_POSTS = "SIGN_LOADING"


export const getPostAll = () => {
  return async (dispatch) => {
    dispatch({ type: POST_LOADING, status: true})
    const posts = await getPostsService()

    dispatch({ type: GET_POSTS, data: posts.data })

  };
};

