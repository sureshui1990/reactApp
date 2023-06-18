import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Reducers from "./reducers";
import reduxLogger from "redux-logger";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const getProfileWhileRefresh = () => {
  const isUserLogged = !!localStorage.getItem('token');
  return { 
    authenticated: isUserLogged ? localStorage.getItem("token") : '',
    user: isUserLogged ? JSON.parse(localStorage.getItem("user")) : '',
   };
};

export default ({ children, initialState = [] }) => {
  return (
    <Provider
      store={createStore(
        Reducers,
        {
          ...initialState,
          user: getProfileWhileRefresh()
        },
        composeWithDevTools(applyMiddleware(thunk, reduxLogger))
      )}
    >
      {children}
    </Provider>
  );
};
