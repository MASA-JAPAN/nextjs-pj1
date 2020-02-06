import React, { Component } from "react";
import MainLayout from "../components/layouts/mainLayout";
import Message from "../components/includes/message";
import Router from "next/router";

class About extends Component {
  handleRouteStart = url => {
    console.log("App is changing to: ", url);
  };

  handleRouteChangeComplete = url => {
    console.log("App changed: ", url);
  };

  handleBeforeHistoryChange = url => {
    console.log("App chnaged history: ", url);
  };

  componentDidMount() {
    Router.events.on("routeChangeStart", this.handleRouteStart);
    Router.events.on("routeChangeComplete", this.handleRouteChangeComplete);
    Router.events.on("routeChangeComplete", this.handleBeforeHistoryChange);
    // console.log(Router.pathname);
    // console.log(Router.query);

    // Router.beforePopState(({ url, as, options }) => {
    //   if (as === "contact") {
    //     window.location.href = as;
    //     return false;
    //   }
    //   return true;
    // });
    Router.replace("/contact", "contact/56");
  }
  render() {
    console.log(this.props);

    return (
      <>
        <MainLayout>
          <h1>About</h1>
          <Message />
          <br />
          <span onClick={() => Router.push("/users/profile/1")}>
            Click me now!!
          </span>
        </MainLayout>
      </>
    );
  }
}

export default About;
