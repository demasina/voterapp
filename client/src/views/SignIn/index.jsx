import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import { loginUser } from "../../actions/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="page-container">
        <Card
          style={{
            width: "70%"
          }}
        >
          <CardHeader color="primary">
            <h3>Sign into Voter App</h3>
            <p>
              Please, enter your email and password
            </p>
          </CardHeader>
          <CardBody
            style={{
              marginTop: "20px"
            }}
          >
            <form
              noValidate
              className={(classes.form, "form")}
              onSubmit={this.onSubmit}
            >
              <div className="form__content">
                <TextField
                  id="email-input"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.onChangeInput}
                  error={this.props.errors.email}
                  type="email"
                  name="email"
                  margin="normal"
                />
                {this.props.errors.email && (
                  <div className="error-label">{this.props.errors.email}</div>
                )}
                <TextField
                  id="password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  name="password"
                  margin="normal"
                  error={this.props.errors.password}
                  value={this.state.password}
                  onChange={this.onChangeInput}
                />
                {this.props.errors.password && (
                  <div className="error-label">
                    {this.props.errors.password}
                  </div>
                )}
                {this.props.errors.confirmed && (
                  <div className="error-label">
                    {this.props.errors.confirmed}
                  </div>
                )}
                <Button
                  type="submit"
                  variant="raised"
                  color="primary"
                  style={{
                    backgroundColor: "#ae00ae",
                    alignSelf: "flex-start",
                    marginTop: "30px",
                    marginBottom: "10px",
                    textTransform: "uppercase"
                  }}
                >
                  Sign in
                </Button>
              </div>
            </form>
            <Link to="/signUp">First time user? sign-up</Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}
SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withStyles(dashboardStyle)(SignIn));
