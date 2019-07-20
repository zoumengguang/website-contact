import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

class ContactComponent extends Component {
  state = { name: "", email: "", message: "" };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
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
    /* Debugging for testing field inputs and GET method
       const { name, email, message } = this.state;
      console.log(
      "name:" + name + "\n" + "email:" + email + "\n" + "msg:" + message
    ); 
      fetch(
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

    const { classes } = this.props;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <h1>Website Contact Form</h1>
          <form
            id="contact-form"
            className={classes.contactForm}
            onSubmit={this.handleSubmit}
          >
            <Grid item>
              <TextField
                required
                id="name"
                label="Name"
                className={classes.formItem}
                onChange={this.handleChange("name")}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="email"
                label="Email"
                className={classes.formItem}
                onChange={this.handleChange("email")}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="message"
                label="Message"
                className={classes.formItem}
                onChange={this.handleChange("message")}
                margin="normal"
                multiline={true}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.formItem}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

// Use Material UI HOC API to style component
const styles = theme => ({
  formItem: {
    width: "100%"
  }
});

ContactComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactComponent);
