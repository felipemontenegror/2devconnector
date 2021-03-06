// import http from "../../config/http";
import { addEducationService, getAllUsers, removeEducationService } from "../../services/userService";
import { toastr } from "react-redux-toastr";

export const getProfile = (props) => {
  return async (dispatch, getState) => {
    const { auth } = getState();

    const { data: user } = await getAllUsers();

    const profile = user.find((it) => it._id === auth.user.id);

    dispatch({ type: "SET_PROFILE", profile });
  };
};

export const updateProfile = (props) => {
  return async (dispatch, getState) => {
    const { auth } = getState();

    const { profile: user } = await getAllUsers();

    const profile = user.find((it) => it._id === auth.user.id);

    dispatch({ type: "UPDATE_PROFILE", profile });
  };
};

export const AddEducation = (props) => {
  return async (dispatch) => {
    const { data: education } = await addEducationService(props);
    if (education) {
      toastr.success("SUCESSO !", "Education cadastrado com sucesso");
    }
  };
};

export const RemoveEducation = (education) => {
  return async (dispatch) => {


    await removeEducationService(education);
    toastr.success("SUCESSO !", `Education ${education.fieldofstudy} deletado com sucesso !`);

    dispatch({ type: "REMOVE_EDUCATION", id: education._id });
  };
};

  