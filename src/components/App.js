import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import FrontPage from "./FrontPage/FrontPage";
import Paragraph from "./Paragraph/Paragraph";
import SignIn from "./SignIn/SignIn";
import history from "../history";
import firebase from "../firebase";

class App extends Component {
  state = {
     authenticated: false,
   };
   componentDidMount() {
     firebase.auth().onAuthStateChanged((authenticated) => {
       authenticated ? this.setState(() => ({
             authenticated: true,
           })) : this.setState(() => ({
             authenticated: false,
        }));
     });
  }
  render() {
    const { authenticated } = this.state
    return <div>
        <Router history={history}>
          <div>
            <Nav authenticated={authenticated} />
            <Switch>
              <Route path="/" exact render={props => <FrontPage {...props} authenticated={authenticated} />} />
              <Route path="/documents/:id" exact component={Paragraph} />
              <Route path="/SignIn" exact component={SignIn} />
            </Switch>
          </div>
        </Router>
      </div>;
  }
};

export default App;
