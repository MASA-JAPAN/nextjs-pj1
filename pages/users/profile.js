import React, { Component } from "react";

const Profile = props => {
  // console.log(props);

  return (
    <>
      <h1>Profile</h1>
    </>
  );
};

Profile.getInitialProps = async ({ pathname, query, asPath, req, res }) => {
  return { values: "1,2,3,4" };
};

export default Profile;
