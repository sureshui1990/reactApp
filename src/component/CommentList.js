import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';
// import axios from 'axios';

class CommentList extends Component{

  // handleFetchComments = async () => {
  //   const response  = await axios.get('http://jsonplaceholder.typicode.com/comments');
  //   const comments = response.data.map(comment => comment.name).slice(0, 10);
  //   this.props.fetchComments(comments);
  // }

  listItem = () => {
    return this.props.comments && this.props.comments.map((item,index) => {
      return <li  className="list-item" key={index}>{item}</li>
    })
  }

  render() {
    return <div>
    <div>Comment List Component321</div>
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
