import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../actions/index";
import { Link } from "react-router-dom";

class SignOut extends Component {
    componentDidMount(){
        this.props.handleSignOut();
    }
  render() {
    return (
      <div>
        <h2>Sorry, see you to go.</h2>
        <Link to="/signin">Login</Link> <Link to="/signup">SignUp</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignOut: () => dispatch(signOut),
  };
};

export default connect(null, mapDispatchToProps)(SignOut);
