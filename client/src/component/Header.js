import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";

class Header extends Component {
  renderLinks = () => {
    if (this.props.hasAuth) {
      return (
        <React.Fragment>
          <NavItem href="/dashboard">
            Dashboard
          </NavItem>
          <NavDropdown title="-" id="basic-nav-dropdown">
            <MenuItem>Profile</MenuItem>
            <MenuItem>Setting</MenuItem>
            <MenuItem divider />
            <MenuItem href="/signout">
              Logout
            </MenuItem>
          </NavDropdown>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavItem href="/feature">
            Feature
          </NavItem>
          <NavItem href="/signin">
            SignIn
          </NavItem>
          <NavItem href="/signup">
            SignUp
          </NavItem>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>{this.renderLinks()}</Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasAuth: state.auth.authendicated || localStorage.getItem("token"),
  };
};

export default connect(mapStateToProps, null)(Header);
