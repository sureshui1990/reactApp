import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Reducers from './reducers';
import reduxPromise from 'redux-promise';
import reduxLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
 
export default ({ children, initialState= [] }) => {
    return (
        <Provider store={createStore(Reducers, {...initialState}, composeWithDevTools(applyMiddleware(reduxPromise,reduxLogger)))}>
            {children}
        </Provider>
    )
}