/**
 * @jest-environment jsdom
*/
import React from "react";
import CommentList from "../CommentList";
import { mount } from "enzyme";
import Root from "../../Root";

describe("CommentList Component", () => {
  let wrapped,
    initialState = { comments: ["comment one", "comment two"] };
  beforeAll(() => {
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  it("creates li and length test", () => {
    expect(wrapped.find('li').length).toEqual(2);
  });

  it("test the content of the list item", () => {
    expect(wrapped.render().text()).toContain('comment one');
  });
  
  it("shows the conent of each list item", () => {
    expect(wrapped.render().text()).toContain('comment two');
  });

});
