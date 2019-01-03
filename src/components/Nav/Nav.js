import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogOut from "../LogOut/LogOut"
import './Nav.scss';

class Nav extends Component {
  renderlogin() {
    if (this.props.authenticated === true) {
      return (
        <LogOut />
      )
    } else {
      return (
        <Link to="/SignIn">
          Login
        </Link>
      )
    }
  }
  render() {
    return (
      <div className="navigation">
        <div className="link">
          <Link to="/">
            Main Page
          </Link>
        </div>
        <div className="signIn">
          {this.renderlogin()}
        </div>
      </div>
    );
  }
};

export default Nav;
