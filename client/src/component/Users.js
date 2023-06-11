import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../actions/index";

class Users extends Component {
    componentDidMount(){
        this.props.handleSignOut();
    }
  render() {
    return (
      <div>
        <h2>Sorry, see you to go.</h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignOut: () => dispatch(signOut),
  };
};

export default connect(null, mapDispatchToProps)(Users);
