import React from "react";
import Header from "../includes/header";

const MainLayout = props => {
  return (
    <>
      <Header /> {props.children}
    </>
  );
};

export default MainLayout;
