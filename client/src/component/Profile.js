import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateProfile } from "../actions/index";
import { FieldInput, GridLayOut, MainLayout } from "./CustomFormFields";
import requireAuth from './requireAuth';

class Profile extends Component {
  
  onSubmit = (propsFromForm) => {
    const { updateProfile } = this.props;
    const updatingFields = {
      firstName: propsFromForm.firstName,
      lastName: propsFromForm.lastName,
      email:propsFromForm.email
    };
    updateProfile(updatingFields);
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <MainLayout>
        <GridLayOut>
          <h2>Profile Update</h2>
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
              placeholder="Email id"
              autoComplete="off"
              disabled
            />
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
      </MainLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasAuth: state.auth.authenticated,
    initialValues: state.auth.user || JSON.parse(localStorage.getItem('user')) || {},
  };
};
const mapDispathToProps = (dispatch) => {
  return {
    updateProfile: (data) => dispatch(()=> updateProfile(dispatch, data)),
  };
};

const connectReduxForm = reduxForm({
  form: "profileUpdate",
  enableReinitialize: true,
})(requireAuth(Profile));

export default connect(mapStateToProps, mapDispathToProps)(connectReduxForm);
