import http from "../config/http";

const getAllUsers = async (post) => {
  return http.get(`/user`);
};

const updateUser = (user, id) => http.patch(`/user/${id}`, 
  {
  post: { "_id": user._id }
  }
)

const addEducationService = (education) => {
  return http.post(`/education`, education);
};

const removeEducationService = (education) => http.delete(`/education`,
  {
    data: { "_id": education._id }
  }
)

export { getAllUsers, updateUser, addEducationService, removeEducationService }