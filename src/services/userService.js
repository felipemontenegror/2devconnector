import http from "../config/http";

const getAllUsers = async (post) => {
  return http.get(`/user`);
};

const addEducationService = (education) => {
  return http.post(`/education`, education);
};
const removeEducationService = (education) => http.delete(`/education`,
  {
    data: { "_id": education._id }
  }
)
export { getAllUsers, addEducationService, removeEducationService };
