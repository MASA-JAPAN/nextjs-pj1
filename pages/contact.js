import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <>
        <h1>Contact</h1>
        <div className="jsxStyled">Styles with styled-jsx</div>
        <style jsx>
          {`
            .jsxStyled {
              color: blue;
            }
          `}
        </style>
        <div className="contact_static">Styles with static css</div>
        <div>
          <img src="/static/images/profile2.png" />
        </div>
      </>
    );
  }
}

export default Contact;
