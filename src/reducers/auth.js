import { CHANGE_AUTH } from "../actions/types";

const initialState = {
    isLoggedIn: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return {...state, isLoggedIn: action.payload };
    
        default:
            return state;
    }
}