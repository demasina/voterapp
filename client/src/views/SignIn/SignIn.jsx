import React, { Component } from "react";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { Input, FormControl, InputLabel } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const styles = {
	SignInBody: {
		marginLeft: "30px"
	},
  emailIn: {
		marginTop: "25px"
	},
	passIn: {
		marginTop: "25px"
	},
	SignInButton: {
		margin: "25px 30px"
	}
};

class SignIn extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader className={classes.SignInHeader} color="primary">
                <h3>Sign into Voter App</h3>
                <p>Please, enter your email and password</p>
              </CardHeader>
              <CardBody className={classes.SignInBody}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <FormControl className={classes.emailIn}>
                      <InputLabel htmlFor="email">Email address</InputLabel>
                      <Input className="email" />
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <FormControl className={classes.passIn}>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input className="password" />
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button className={classes.SignInButton} color="primary" type="submit">
                  SIGN IN
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </form>
    );
  }
}

export default withStyles(styles)(SignIn);
