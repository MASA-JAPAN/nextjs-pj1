import React, { Component } from "react";
import axios from "axios";
import MainLayout from "../components/layouts/mainLayout";
import MyStyle from "../styles/main.css";
import Link from "next/link";

class Home extends Component {
  static async getInitialProps({ pathname, query, asPath, req, res }) {
    let userData;

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      userData = response.data;
    } catch {
      // console.log("error");
    }

    // console.log(req);

    return {
      user: {
        name: "Francis",
        lastname: "Jones"
      },
      userData
    };
  }

  constructor(props) {
    super(props);
  }

  renderUserList = users =>
    users.map((user, i) => (
      <li className="list-group-item" key={i}>
        <Link
          as={`/users/profile/${user.id}`}
          href={{
            pathname: "/users/profile",
            query: {
              userId: user.id
            }
          }}
        >
          <a>{user.name}</a>
        </Link>
      </li>
    ));
  render() {
    console.log(this.props);

    return (
      <>
        <MainLayout>
          <h1>Pick a user</h1>
          <ul className="list-group">
            {this.renderUserList(this.props.userData)}
          </ul>
        </MainLayout>
      </>
    );
  }
}

export default Home;
