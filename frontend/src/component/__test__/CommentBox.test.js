/**
 * @jest-environment jsdom
*/

import React from "react";
import { mount } from 'enzyme';
import CommentBox from "../CommentBox";
import Root from '../../Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>); 
});

it('has comment and button element', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('textarea interaction', () =>{
    
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        });
        wrapped.update();
    });

    it('has comment box that user can type in', () => {
        expect(wrapped.find('textarea').props().value).toEqual('new comment');
    });

    it('textarea got emptied, when form submit', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').props().value).toEqual('');
    });

});
