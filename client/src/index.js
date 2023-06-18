import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import "./index.css";
import App from "./component/App";
import Root from "./Root";
import Welcome from './component/Welcome';
import Feature from './component/Feature';
import SignUp from "./component/SignUp";
import SignIn from './component/SignIn';
import SignOut from './component/SignOut';
import MyDashboard from './component/Dashboard';
import Profile from './component/Profile';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/dashboard" component={MyDashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/feature" component={Feature} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
      </App>
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
