import React from "react";
import App, { Container } from "next/app";
import auth0Serv from "../lib/appAuth";
import MainLayout from "../components/layouts/mainLayout";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let userAuth = {};
    let baseUrl = publicRuntimeConfig.base_url;

    userAuth = await auth0Serv.isAuthenticated(ctx.req);
    console.log(userAuth);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, userAuth, baseUrl };
  }

  render() {
    const { Component, pageProps, userAuth, baseUrl } = this.props;

    console.log(this.props.userAuth);

    const headerStyle = pageProps.headerStyle ? pageProps.headerStyle : "";
    const pageConfings = pageProps.pageConfigs ? pageProps.pageConfigs : null;

    return (
      <Container>
        <MainLayout
          userAuth={userAuth}
          headerStyle={headerStyle}
          pageConfigs={pageConfings}
          baseUrl={baseUrl}
        >
          <Component {...pageProps} userAuth={userAuth} baseUrl={baseUrl} />
        </MainLayout>
      </Container>
    );
  }
}

export default MyApp;
