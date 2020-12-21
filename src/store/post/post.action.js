import { getPostsService, getCountPostsService } from '../../services/posts'
export const POST_LOADING = "SIGN"
export const GET_POSTS = "SIGN_LOADING"


export const getPostAll = (page, limit) => {
  return async (dispatch) => {
    dispatch({ type: POST_LOADING, status: true})
    const count = await getCountPostsService()
    const posts = await getPostsService(page, limit)

    dispatch({ type: GET_POSTS, data: posts.data, total: count })

  };
};

