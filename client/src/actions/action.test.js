import { saveComments, fetchComments } from './index';
import { SAVE_COMMENTS, FETCH_COMMENTS } from './types';
import moxios from 'moxios';

describe('About SAVECOMMENT action test', () => {

    it('action type test', () => {
        const action = saveComments();
        expect(action.type).toEqual(SAVE_COMMENTS);
    });
    it('action payloan test', () => {
        const action = saveComments('Text Comment');
        expect(action.payload).toEqual('Text Comment');
    });

});

describe('About fetchComment action test', () => {

    beforeEach(()=> {
        moxios.install();
    })

    beforeEach(()=> {
        moxios.uninstall();
    })

    it('action type test', done => {
        const action = fetchComments();
        moxios.wait(() => {
            expect(FETCH_COMMENTS).toEqual(FETCH_COMMENTS);
            done();
        });
    });
    it('action payloan test', () => {
        const action = fetchComments(['test 1', 'test 2']);
        expect(['test 1', 'test 2']).toEqual(['test 1', 'test 2']);
    });
});