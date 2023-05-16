import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

class CommentList extends Component{

  listItem = () => {
    return this.props.comments && this.props.comments.map((item,index) => {
      return <li  className="list-item" key={index}>{item}</li>
    })
  }

  render() {
    return <div>
    <div>Comment List Component321</div>
    <h3>Comment list</h3>
    <button type='button' id="fech-comments" onClick={this.props.fetchComments}>fetch comments</button>
    <ul>
      {this.listItem()}
    </ul>
    </div>
  };
}

const mapStateToProps = (state) => {
  return {comments: state.comments}
}
export default connect(mapStateToProps, {fetchComments})(CommentList);
