import React, { Component } from "react";
import { Authenticator } from "aws-amplify-react";
import ContactComponent from "./components/ContactComponent";

import "./amplify.js";

class AppWithAuth extends Component {
  state = {};

  handleStateChange = loggedIn => {
    this.setState({ loggedIn });
  };

  render() {
    const { loggedIn } = this.state ? this.state : false;

    return (
      <div>
        <Authenticator
          signUpConfig={signUpConfig}
          federated={federated}
          onStateChange={this.handleStateChange}
        />
        {loggedIn === "signedIn" ? <ContactComponent /> : ""}
      </div>
    );
  }
}

const federated = {
  google_client_id: process.env.REACT_APP_GOOGLE_APP_ID
};

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "username",
      required: true,
      displayOrder: 1,
      type: "string",
      custom: false
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
      custom: false
    }
  ],
  includeGreetings: true
};

export default AppWithAuth;
