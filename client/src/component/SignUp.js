import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Alert, ButtonToolbar } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { signUp } from "../actions/index";
import redirectToHome from "./redirectToHome";
import { FieldInput, GridLayOut, MainLayout } from "./CustomFormFields";

class Signup extends Component {
  onSubmit = (propsFromForm) => {
    const { handleSignup } = this.props;
    const requesBody = { ...propsFromForm };
    handleSignup(requesBody);
  };
  componentDidUpdate() {
    if (this.props.hasAuth) {
      this.props.history.push("/feature");
    }
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, authError } = this.props;
    return (
      <MainLayout>
        <GridLayOut>
          <h2>SignUp</h2>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              name="firstName"
              component={FieldInput}
              type="text"
              placeholder="First Name"
              autoComplete="off"
            />
            <Field
              name="lastName"
              component={FieldInput}
              type="text"
              placeholder="Last Name"
              autoComplete="off"
            />
            <Field
              name="email"
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
            <ButtonToolbar>
              <Button
                type="submit"
                disabled={pristine || submitting}
                bsStyle="primary"
              >
                Submit
              </Button>
              <Button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
                bsStyle="danger"
              >
                Reset
              </Button>
            </ButtonToolbar>
          </form>
        </GridLayOut>
      </MainLayout>
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
    handleSignup: (data) => dispatch(signUp(data)),
  };
};

const PreloadConnect = connect(
  mapStateToProps,
  mapDispathToProps
)(redirectToHome(Signup));

export default compose(
  reduxForm({
    form: "signup",
  })
)(PreloadConnect);
