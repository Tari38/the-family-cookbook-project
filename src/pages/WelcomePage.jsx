import React, { Component } from "react";

import Form_CreateAccount from "../components/forms/Form_CreateAccount";


class WelcomePage extends Component {
  render() {
  return(
    <>
      <div className="welcome-section">
        <h4>Welcome to the Family Cookbook Creator!</h4>

        <p>You are about to begin the truly rewarding experience of creating a treasured heirloom - a personalized family cookbook.</p>
      
        <h4>The Editor - YOU!</h4>

        <p>Every new project needs a project manager, and for this cookbook, that is you - the editor.
          The editor is the person who gets things started and makes sure they keep moving ahead.
          This person is also responsible for defining the project in terms of who to invite to participate,
          which recipes to include and when to publish the book itself.
          To start, let's get some basic information from you to create your account.
        </p>
      </div>
      <hr />
      <div className="create-account-section">
        <Form_CreateAccount />
      </div>
    </>
    );
  }
}

export default WelcomePage;