import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Reducers from "./reducers";
// import reduxPromise from "redux-promise";
import reduxLogger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import async from "./middleware/async";

export default ({ children, initialState = [] }) => {
  return (
    <Provider
      store={createStore(
        Reducers,
        { ...initialState },
        composeWithDevTools(applyMiddleware(thunk,async, reduxLogger))
      )}
    >
      {children}
    </Provider>
  );
};
