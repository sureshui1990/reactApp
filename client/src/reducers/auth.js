import { CHANGE_AUTH, AUTH_USER, AUTH_ERROR, SIGN_OUT } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  authenticated: "",
  error: "",
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return { ...state, isLoggedIn: action.payload };

    case AUTH_USER: {
      const { token, user }= action.payload;
      return { ...state, authenticated: token, user };
    }
    case SIGN_OUT: {
      return {...state, authenticated: action.payload,error: ''}
    }
    case AUTH_ERROR: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};
