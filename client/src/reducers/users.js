import { GET_USERS } from "../actions/types";

const initialState = {
    data: [],
    err:{}
};

export default function(state = initialState, action) {
    
    switch (action.type) {
        case GET_USERS:
            return {...state, data: action.payload.data};
    
        default:
            return {...state};
    }
}