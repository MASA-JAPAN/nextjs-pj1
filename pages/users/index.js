import React, { Component } from "react";
import AuthRoute from "../../components/HOC/authRoute";
import axios from "axios";
import Cookies from "js-cookie";
import { getCooksFromReq } from "../../lib/utils";

class Users extends Component {
  static async getInitialProps({ req }) {
    let user = "Francis";
    let pageConfigs = "Admin";
    let userList;

    let reqCook = getCooksFromReq(req, "x-jwt");
    console.log(reqCook);

    // try {
    //   const response = axios.get("http://localhost:3000/api/users", {
    //     headers: {
    //       authorization: `Bearer ${reqCook}`
    //     }
    //   });
    //   userList = (await response).data;
    // } catch (error) {
    //   console.log(error);
    // }

    return { user, pageConfigs, userList };
  }

  // componentDidMount() {
  //   axios
  //     .get("/api/users", {
  //       headers: {
  //         authorization: `Bearer ${Cookies.getJSON("x-jwt")}`
  //       }
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //     });
  // }

  render() {
    console.log(this.props);

    return (
      <>
        <h1>Users</h1>
      </>
    );
  }
}

export default AuthRoute(Users);
