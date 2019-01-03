import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../../firebase";
import "./SignIn.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <div className="form">
        <div>
          <h2>Login</h2>
        </div>
        {error ? (
          <p>{error.message}</p>
          ) : null}
        <div>
          <form onSubmit={this.handleSubmit} className="signInForm">
            <label>
              Enter Your Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleInputChange}
            />
            <label>
              Enter Your Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleInputChange}
            />
            <button children="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(SignIn);
