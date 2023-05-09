import { SAVE_COMMENTS, FETCH_COMMENTS } from './types';
import axios from 'axios';

export const saveComments = comment => {
    return {
        type:SAVE_COMMENTS,
        payload: comment
    }
}

export const fetchComments =  async () => {
    const response  = await axios.get('http://jsonplaceholder.typicode.com/comments');
    const comments = response.data.map(comment => comment.name).slice(0, 10);
    return {
        type: FETCH_COMMENTS,
        payload: comments
    }
}