import CommentReducer from './../Comments';
import { SAVE_COMMENTS } from '../../actions/types';

it('hanlde action type of SAVE_COMMENTS', () => {
    const action = {
        type: SAVE_COMMENTS,
        payload: 'New comment'
    };
    const nextState = CommentReducer([], action);
    expect(nextState).toEqual(['New comment']);
});

it('handle action type with unknow type', () => {
    const nextState = CommentReducer([], { type: 'ASDFASD'});
    expect(nextState).toEqual([]);
})