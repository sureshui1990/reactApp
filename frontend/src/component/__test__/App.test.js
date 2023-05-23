/**
 * @jest-environment jsdom
*/

import React from "react";
import { mount } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";
import Root from '../../Root';

it('renders without crashing', () => {
  const component = mount(<Root><App /></Root>);
  expect(component.find(CommentBox).length).toEqual(1);
})

it('renders without crashing', () => {
  const component = mount(<Root><App /></Root>);
  expect(component.find(CommentList).length).toEqual(1);
})