import React, { Component } from "react";
import axios from "axios";
import MainLayout from "../components/layouts/mainLayout";

class Home extends Component {
  static getInitialProps() {
    const request = axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        console.log(response.data);
      });

    return {
      user: {
        name: "Francis",
        lastname: "Jones"
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    console.log(this.state);

    return (
      <>
        <MainLayout>
          <h1>Hello</h1>
        </MainLayout>
      </>
    );
  }
}

export default Home;
