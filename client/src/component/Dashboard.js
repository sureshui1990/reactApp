import React, { Component } from "react";
import { connect } from "react-redux";
import requireAuth from "./requireAuth";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { getUsers } from "../actions/index";
import { MainLayout } from './CustomFormFields';

const User = ({ email }) => {
  return (
    <React.Fragment>
      <h4>{email}</h4>
    </React.Fragment>
  );
};

class Dashboard extends Component {
  
  componentDidMount() {
    const { hasAuth,availableUsers } = this.props;
    const isUserListNotAvailable = hasAuth && availableUsers && availableUsers.length === 0;
    isUserListNotAvailable && this.props.handleGetUsers();
  }

  
  render() {
    const { availableUsers = [] } = this.props;
    return (
      <MainLayout>
        <h2>Dashboard</h2>

        <h3>User list</h3>
        <ListGroup>
          {availableUsers &&
            availableUsers.map((user) => {
              return (
                <ListGroupItem key={user._id}>
                  <User {...user} />
                </ListGroupItem>
              );
            })}
        </ListGroup>
      </MainLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    availableUsers: state.users.data,
    successMessage: state.auth.success,
    hasAuth: state.auth.authenticated || localStorage.getItem('token') || false
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleGetUsers: () => dispatch(() => getUsers(dispatch))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(requireAuth(Dashboard));
