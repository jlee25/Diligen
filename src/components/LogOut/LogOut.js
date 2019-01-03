import React from "react";
import firebase from "firebase";
import "./LogOut.scss";
import history from "../../history";

const SignOut = () => {
  firebase.auth().signOut();
  history.push("/");
};

const LogOut = () => {
  return <button onClick={SignOut} children="Log Out" />;
};

export default LogOut;
