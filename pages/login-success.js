import React, { Component } from "react";
import auth0Serv from "../lib/appAuth";
import Router from "next/router";

class LoginSuccess extends Component {
  state = {
    error: false
  };
  componentDidMount() {
    auth0Serv
      .handleAuthentication()
      .then(() => {
        console.log("ok");
        Router.push("/about");
      })
      .catch(err => {
        console.log(err);

        this.setState({ error: true });
      });
  }
  render() {
    return (
      <>
        {!this.state.error ? (
          <div>Signing in</div>
        ) : (
          <div>Sorry something went wrong</div>
        )}
      </>
    );
  }
}

export default LoginSuccess;
