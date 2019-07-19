import React, { Component } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import "./ContactComponent.css";

class ContactComponent extends Component {
  state = { name: "", email: "", message: "" };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this.state);
    const { email, name, message } = this.state;

    fetch(
      "https://bfo43lnqpb.execute-api.us-west-2.amazonaws.com/dev/entries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          name: name,
          message: message
        })
      }
    )
      .then(res => res.json())
      .then(json => {
        console.log("Response: " + json);
      })
      .catch(err => {
        console.log(err);
      });

    // clear form
    document.getElementById("contact-form").reset();
    this.setState({ name: "", email: "", message: "" });
    event.preventDefault();
  };

  render() {
    //const { name, email, message } = this.state;
    // Debugging for testing field inputs and GET method
    /* console.log(
      "name:" + name + "\n" + "email:" + email + "\n" + "msg:" + message
    ); */
    /* fetch(
      "https://bfo43lnqpb.execute-api.us-west-2.amazonaws.com/dev/entries",
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(console.log); */
    return (
      <Container component="main" maxWidth="xs">
        <h1>Website Contact Form</h1>
        <form
          id="contact-form"
          className="container"
          onSubmit={this.handleSubmit}
        >
          <TextField
            required
            id="name"
            label="Name"
            className="textField"
            onChange={this.handleChange("name")}
            margin="normal"
          />
          <TextField
            required
            id="email"
            label="Email"
            className="textField"
            onChange={this.handleChange("email")}
            margin="normal"
          />
          <br />
          <TextField
            required
            id="message"
            label="Message"
            className="textField"
            onChange={this.handleChange("message")}
            margin="normal"
            multiline={true}
          />
          <Button
            type="submit"
            variant="contained"
            className="submit-button"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Container>
    );
  }
}

export default ContactComponent;
