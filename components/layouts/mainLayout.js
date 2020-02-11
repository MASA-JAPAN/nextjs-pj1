import React from "react";
import Header from "../includes/header";
import Head from "next/head";

const MainLayout = props => {
  return (
    <>
      <Head>
        {props.pageConfigs === "Admin" ? (
          <title>User page admin</title>
        ) : (
          <title>My Awesome app</title>
        )}

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link href="/static/css/styles.css" rel="stylesheet" />
      </Head>
      <div className="mainLayout container">
        <Header {...props} />
        <div className="container">{props.children}</div>
      </div>
    </>
  );
};

export default MainLayout;
