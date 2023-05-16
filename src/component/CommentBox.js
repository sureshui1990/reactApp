import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComments } from '../actions';
import requireAuth from './requireAuth';

class CommentBox extends Component{
  constructor(){
    super();
    this.state  = {
      comment: ''
    }
  }

  handleChange = (e) => {
    this.setState({comment: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveComments(this.state.comment);
    this.setState({comment:''});
  }

  render(){
    const isSubmitDisabled = this.state.comment === '';
    
    return <form onSubmit={this.handleSubmit}>
      <h2>Add comment</h2>
      <div>
        <textarea onChange={this.handleChange} value={this.state.comment} />
      </div>
      <div>
        <button type='submit' disabled={isSubmitDisabled}>
          Submit
        </button>
      </div>
    </form>
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveComments: data => dispatch(saveComments(data))
  }
}

export default connect(null, mapDispatchToProps)(requireAuth(CommentBox));