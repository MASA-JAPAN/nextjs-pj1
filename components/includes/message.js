import React from "react";
import { withRouter } from "next/router";

const Message = props => {
  // console.log(props);

  const handler = () => {
    props.router.push(
      {
        pathname: "/users/profile",
        query: { userId: 1 }
      },
      "/users/profile/1"
    );
  };

  return (
    <>
      <div>Hello</div>
      <div>I am the "{props.router.pathname}" page</div>
      <div>
        Click <span onClick={handler}>here</span> to read more
      </div>
    </>
  );
};

export default withRouter(Message);
