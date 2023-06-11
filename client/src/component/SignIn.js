import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { signIn } from "../actions/index";
import redirectToHome from "./redirectToHome";
import { FieldInput, GridLayOut } from './CustomFormFields';

class SignIn extends Component {
  onSubmit = (propsFromForm) => {
    const { handleSignIn } = this.props;
    const requesBody = {
      email: propsFromForm.userName,
      password: propsFromForm.password
    }
    handleSignIn(requesBody);
  };
  componentDidUpdate() {
    if(this.props.hasAuth) {
      this.props.history.push('/feature');
    }
  }
  render() {
    console.log(this.props);
    const { handleSubmit, pristine, submitting, authError } = this.props;
    return (
      <GridLayOut>
        <h2>SignIn</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                name="userName"
                component={FieldInput}
                type="text"
                placeholder="Username"
                autoComplete="off"
              />
              <Field
                name="password"
                component={FieldInput}
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
          {authError && <Alert bsStyle="danger">{authError}</Alert>}
          <div>
            <Button
              type="submit"
              disabled={pristine || submitting}
              bsStyle="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </GridLayOut>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.error,
    hasAuth: state.auth.authenticated,
  };
};
const mapDispathToProps = (dispatch) => {
  return {
    handleSignIn: (data) => dispatch(signIn(data)),
  };
};

const PreloadConnect = connect(mapStateToProps, mapDispathToProps)(redirectToHome(SignIn));

export default compose(
  reduxForm({
    form: "signin",
  })
)(PreloadConnect);
