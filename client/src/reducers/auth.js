import {
  CHANGE_AUTH,
  AUTH_USER,
  AUTH_ERROR,
  SIGN_OUT,
  UPDATE_PROFILE,
} from "../actions/types";

const initialState = {
  isLoading: false,
  loaded: false,
  data: null,
  error: null,
  isLoggedIn: false,
  authenticated: "",
  user: {},
  success: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return { ...state, isLoggedIn: action.payload };

    case AUTH_USER: {
      const { token, user, success, message } = action.payload;
      return {
        ...state,
        isLoggedIn: success || false,
        authenticated: token,
        user,
        success: message,
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        authenticated: action.payload,
        error: "",
        success: ""
      };
    }
    case AUTH_ERROR: {
      return { ...state, error: action.payload };
    }

    case UPDATE_PROFILE: {
      return { ...state, user: action.payload };
    }

    default:
      return state;
  }
};
