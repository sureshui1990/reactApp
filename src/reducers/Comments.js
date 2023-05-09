import { SAVE_COMMENTS, FETCH_COMMENTS } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
    
    switch (action.type) {
        case SAVE_COMMENTS:
            return [...state, action.payload];

        case FETCH_COMMENTS:
            return [...state, ...action.payload];
    
        default:
            return [...state];
    }
}