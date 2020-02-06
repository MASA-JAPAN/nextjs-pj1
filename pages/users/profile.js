import React, { Component } from "react";
import MainLayout from "../../components/layouts/mainLayout";
import axios from "axios";

class Profile extends Component {
  static async getInitialProps({ query }) {
    let user;

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${query.userId}`
      );
      user = response.data;
    } catch (error) {
      console.log(error);
    }

    return { user };
  }
  showUser = user => (
    <div>
      <div>Name:{user.name}</div>
      <div>Lastname:{user.phone}</div>
      <div>Email:{user.email}</div>
    </div>
  );

  render() {
    // console.log(this.props);

    return (
      <MainLayout>
        <br />
        <h1>User Profile</h1>

        {this.showUser(this.props.user)}
      </MainLayout>
    );
  }
}

export default Profile;
