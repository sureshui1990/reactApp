import {
  SAVE_COMMENTS,
  FETCH_COMMENTS,
  CHANGE_AUTH,
  AUTH_USER,
  AUTH_ERROR,
  GET_USERS,
  UPDATE_PROFILE,
  SIGN_OUT
} from "./types";
import axios from "axios";
import { setUserProfile } from "../util/localStorage";
import { toast } from 'react-toastify';

export const saveComments = (comment) => {
  return {
    type: SAVE_COMMENTS,
    payload: comment,
  };
};

export const fetchComments = async () => {
  const response = await axios.get(
    "http://jsonplaceholder.typicode.com/comments"
  );
  const comments = response.data.map((comment) => comment.name).slice(0, 10);
  return {
    type: FETCH_COMMENTS,
    payload: comments,
  };
};

export const changeAuth = (isLogIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLogIn,
  };
};

export const signUp = async (requestData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/signup",
      requestData
    );
    const {token, user } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    const options = {
      autoClose: 4000,
      type: toast.TYPE.WARNING,
      position: toast.POSITION.TOP_RIGHT,
    };
    toast.success("You created account successfully", options); 
    return {
      type: AUTH_USER,
      payload: { token, user },
    };
  } catch (error) {
    const options = {
      autoClose: 4000,
      type: toast.TYPE.ERROR,
      position: toast.POSITION.TOP_RIGHT,
    };
    toast.success(error.response.data.error, options);
    return {
      type: AUTH_ERROR,
      payload: error.response.data.error,
    };
  }
};

export const signOut = () => {
  const options = {
    autoClose: 4000,
    type: toast.TYPE.WARNING,
    position: toast.POSITION.TOP_RIGHT,
  };
  toast.success("You getting SignOut", options); 
  return {
    type: SIGN_OUT,
    payload: "",
  };
};
export const getUsers = async (dispatch) => {
  const instance = axios.create({
    baseURL: "http://localhost:4000/",
    timeout: 2000,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  try {
    const response = await instance.get("/users");
    const DATA = response.data;
    dispatch({
      type: GET_USERS,
      payload: DATA,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: { error },
    });
  }
};

export const signIn = async (dispatch, requestData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/signin",
      requestData
    );
    const { token,user,message } = response.data;
    setUserProfile({ token, user: JSON.stringify(user) });
    const options = {
      autoClose: 4000,
      type: toast.TYPE.success,
      position: toast.POSITION.TOP_RIGHT,
    };
    toast.success(message, options);
  
    dispatch({
      type: AUTH_USER,
      payload: {token,user}
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.error,
    });
  }
};

export const updateProfile = async (dispatch,updateData) => {
  try {
    const response = await axios.put(
      "http://localhost:4000/userprofileupdate",
      updateData
    );
    const responseProfile = response.data.data;
    setUserProfile({ user: responseProfile});
    dispatch({
      type: UPDATE_PROFILE,
      payload: responseProfile
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response,
    });
  }
};