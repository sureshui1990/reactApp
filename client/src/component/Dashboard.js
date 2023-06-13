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
    const isUserListNotAvailable = this.props.availableUsers && this.props.availableUsers.length === 0;
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleGetUsers: (users) => dispatch(getUsers(users)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(requireAuth(Dashboard));
