import { combineReducers } from "redux";
import commentsReducer from './comments';
import authReducer from './auth';
import usersReducer from './users';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer,
    form: reduxFormReducer,
    users: usersReducer
})