import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from './CustomFormFields';
class SignOut extends Component {

  render() {
    return (
      <MainLayout>
        <h2>Sorry, see you to go.</h2>
        <Link to="/signin">Login</Link> <Link to="/signup">SignUp</Link>
      </MainLayout>
    );
  }
}
;

export default SignOut;
