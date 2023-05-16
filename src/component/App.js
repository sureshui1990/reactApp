import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { changeAuth } from "../actions";

const HeaderLink = ({ hasAuth, changeAuth }) => {
  return (
  <div>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/post" >Post home</Link>
          </li>
          <li>
            <button type="button" onClick={() => {
              changeAuth(!hasAuth)
            }}>
              Sign{hasAuth ?'Out' : 'In'}
            </button>
          </li>
        </ul>
      </div>
  )
}
class App extends Component {

  render() {
    const { hasAuth,  changeAuth } = this.props;
    return (
      <div className="App">
        <HeaderLink hasAuth={hasAuth} changeAuth={changeAuth} />
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hasAuth: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAuth: (isLoggedIn) => dispatch(changeAuth(isLoggedIn))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
