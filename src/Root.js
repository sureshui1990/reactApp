import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Reducers from './reducers';
import reduxPromise from 'redux-promise';
import reduxLogger from 'redux-logger';
 
export default ({ children, initialState= [] }) => {
    return (
        <Provider store={createStore(Reducers, {...initialState}, applyMiddleware(reduxPromise,reduxLogger))}>
            {children}
        </Provider>
    )
}