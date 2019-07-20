// Login Form for website

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

class LoginPage extends Component {
  state = { email: "", password: "" };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleLogin = event => {
    //const { email, password } = this.state;

    document.getElementById("login-form").reset();
    this.setState({ email: "", password: "" });
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <h1>Welcome to Website Contact App</h1>
        <form id="login-form" onSubmit={this.handleLogin}>
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
              id="password"
              type="password"
              label="Password"
              className={classes.formItem}
              onChange={this.handleChange("password")}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <Button
              className={classes.formItem}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
          </Grid>
        </form>
      </Grid>
    );
  }
}

const styles = theme => ({
  formItem: {
    width: "17vw"
  }
});

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginPage);
