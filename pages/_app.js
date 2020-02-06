import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    const newCar = {
      car: {
        brand: "Ford",
        color: "red"
      }
    };

    return (
      <Container>
        <Component {...pageProps} {...newCar} />
      </Container>
    );
  }
}

export default MyApp;
