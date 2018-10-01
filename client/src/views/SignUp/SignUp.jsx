import React, { Component } from "react";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { Input, FormControl, InputLabel } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const styles = {
  SignUpBody: {
    marginLeft: "30px"
  },
  emailUp: {
    marginTop: "25px"
  },
  passUp: {
    marginTop: "25px"
  },
  SignUpButton: {
    margin: "25px 30px"
  }
};

class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h3>Register with Voter App</h3>
                <p>Please, enter your email and password</p>
              </CardHeader>
              <CardBody className={classes.SignUpBody}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <FormControl className={classes.emailUp}>
                      <InputLabel htmlFor="email">Email adress</InputLabel>
                      <Input className="email" />
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <FormControl className={classes.passUp}>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input className="password" />
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <FormControl className={classes.passUp}>
                      <InputLabel htmlFor="password-confirm">
                        Repeat password
                      </InputLabel>
                      <Input className="password-confirm" />
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button
                  className={classes.SignUpButton}
                  color="primary"
									type="submit"
                >
                  SIGN UP
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </form>
    );
  }
}

export default withStyles(styles)(SignUp);
