import http from '../config/http'

//GET
const getUsers = () => http.get('/user')

// UPDATE
const updateUser = (id, data) => http.patch(`/user/${id}`, data)


export {
    getUsers,
    updateUser
}
