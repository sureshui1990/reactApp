import { CHANGE_AUTH, AUTH_USER, AUTH_ERROR } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  authenticated: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return { ...state, isLoggedIn: action.payload };

    case AUTH_USER: {
      return { ...state, authenticated: action.payload, error: "" };
    }
    case AUTH_ERROR: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};
