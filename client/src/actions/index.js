import {
  SAVE_COMMENTS,
  FETCH_COMMENTS,
  CHANGE_AUTH,
  AUTH_USER,
  AUTH_ERROR,
  GET_USERS,
  GET_PROFILE,
  UPDATE_PROFILE,
  SIGN_OUT
} from "./types";
import axios from "axios";

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
    return {
      type: AUTH_USER,
      payload: { token, user },
    };
  } catch (error) {
    return {
      type: AUTH_ERROR,
      payload: error.response.data.error,
    };
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: "",
  };
};
export const getUsers = async () => {
  const instance = axios.create({
    baseURL: "http://localhost:4000/",
    timeout: 2000,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  try {
    const response = await instance.get("/users");
    const DATA = response.data;
    return {
      type: GET_USERS,
      payload: DATA,
    };
  } catch (error) {
    return {
      type: AUTH_ERROR,
      payload: { error },
    };
  }
};

export const signIn = async (requestData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/signin",
      requestData
    );
    const { token,user } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    return {
      type: AUTH_USER,
      payload: {token,user},
    };
  } catch (error) {
    return {
      type: AUTH_ERROR,
      payload: error.response.data.error,
    };
  }
};
export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:4000/user/${userId}`);
    return {
      type: GET_PROFILE,
      payload: response.data,
    };
  } catch (error) {
    return {
      type: AUTH_ERROR,
      payload: error.response.data.error,
    };
  }
};
export const updateProfile = async (requestData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/profileUpdate",
      requestData
    );
    const token = response.data.token;
    localStorage.setItem("token", token);
    return {
      type: UPDATE_PROFILE,
      payload: token,
    };
  } catch (error) {
    return {
      type: AUTH_ERROR,
      payload: error.response.data.error,
    };
  }
};
