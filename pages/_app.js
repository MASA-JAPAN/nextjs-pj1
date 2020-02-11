import React from "react";
import App, { Container } from "next/app";
import auth0Serv from "../lib/appAuth";
import MainLayout from "../components/layouts/mainLayout";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let userAuth = {};

    userAuth = await auth0Serv.isAuthenticated(ctx.req);
    console.log(userAuth);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, userAuth };
  }

  render() {
    const { Component, pageProps, userAuth } = this.props;

    console.log(this.props.userAuth);

    const headerStyle = pageProps.headerStyle ? pageProps.headerStyle : "";
    const pageConfings = pageProps.pageConfigs ? pageProps.pageConfigs : null;

    return (
      <Container>
        <MainLayout
          userAuth={userAuth}
          headerStyle={headerStyle}
          pageConfigs={pageConfings}
        >
          <Component {...pageProps} userAuth={userAuth} />
        </MainLayout>
      </Container>
    );
  }
}

export default MyApp;
