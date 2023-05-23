/**
 * @jest-environment jsdom
*/

import React from "react";
import { mount } from "enzyme";
import App from "../Component/App";
import Root from '../Root';
import moxios from "moxios";


describe('Commentlist Component. Fetch all comments and display them', () => {
    
    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
            status: 200,
            response: ['Fetch comment #1','Fetch comment #2','Fetch comment #3'] 
        });
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('can fetch all the comments and display them', done => {
        
        const wrapped = mount(<Root><App /></Root>);
        
        wrapped.find('#fech-comments').simulate('click');

        moxios.wait(() => {
            wrapped.update();
            expect(wrapped.find('li.list-item').length).toEqual(3);
            done();
            wrapped.unmount();
        });
    
    })
});