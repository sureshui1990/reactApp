import { combineReducers } from "redux";
import CommentsReducer from './Comments';

export default combineReducers({
    comments: CommentsReducer
})