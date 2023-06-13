import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { updateProfile,getUserProfile } from "../actions/index";
import { FieldInput, GridLayOut, MainLayout } from "./CustomFormFields";

class Profile extends Component {
  constructor(){
    super();
    this.state = {
      firstName:'',
      lastName:''
    }
  }
  onSubmit = (propsFromForm) => {
    const { handleSignIn } = this.props;
    const requesBody = {
      firstName: propsFromForm.firstName,
      lastName: propsFromForm.lastName,
    };
    // handleSignIn(requesBody);
  };

  componentDidMount(){
    // this.props.hanldeGetUserProfile(this.props.currentUserId);
  }

  render() {
    const { handleSubmit, pristine, submitting,initialValues } = this.props;
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
    authError: state.auth.error,
    hasAuth: state.auth.authenticated,
    currentUserId: state.auth.currentUserId,
    initialValues: state.auth.user
  };
};
const mapDispathToProps = (dispatch) => {
  return {
    hanldeGetUserProfile: (userId) => dispatch(getUserProfile(userId)),
    handleUpdateProfile: (data) => dispatch(updateProfile(data))
  };
};

const PreloadConnect = connect(
  mapStateToProps,
  mapDispathToProps
)(Profile);

export default compose(
  reduxForm({
    form: "profileUpdate",
    enableReinitialize: true
  })
)(PreloadConnect);
