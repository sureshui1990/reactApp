import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, Nav, MenuItem,Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../actions/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
  handleSignOut = () => {
    this.props.handleSignOut();
    localStorage.clear();
  };
  renderLinks = () => {
    if (this.props.hasAuth) {
      return (
        <React.Fragment>
          <NavItem componentClass={Link} href="/dashboard" to="/dashboard">
            Dashboard
          </NavItem>

          <NavDropdown title="-" id="basic-nav-dropdown">
            <MenuItem componentClass={Link} href="/profile" to="/profile">
              Profile
            </MenuItem>
            <MenuItem divider />
            <MenuItem
              componentClass={Button}
              href="/signout"
              to="/signout"
              onClick={this.handleSignOut}
            >
              Logout
            </MenuItem>
          </NavDropdown>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavItem componentClass={Link} href="/feature" to="/feature">
            Feature
          </NavItem>
          <NavItem componentClass={Link} href="/signin" to="/signin">
            SignIn
          </NavItem>
          <NavItem componentClass={Link} href="/signup" to="/signup">
            SignUp
          </NavItem>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav>{this.renderLinks()}</Nav>
        </Navbar>
        <ToastContainer />
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasAuth: state.auth.authendicated || localStorage.getItem("token"),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSignOut: () => dispatch(()=>signOut(dispatch)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
