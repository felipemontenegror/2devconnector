import http from '../config/http'

const getPostsService = () => {
    return http.get("/posts")
}

export { getPostsService }