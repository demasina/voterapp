import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import { Input, FormControl, InputLabel } from "@material-ui/core";


import Button from "components/CustomButtons/Button.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { Link } from 'react-router-dom'



const styles = {

};

class EmailVerification extends Component {
	render(){
    const { classes } = this.props;
  return (
    <form id="emailverifyForm">
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Email verification to finish registration with Home Expense App</h4>
              <p className={classes.cardCategoryWhite}>Please, enter your email and password</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <Input value="email" disabled />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <Input placeholder="enter code" />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
         	 <Button  color="primary" type="button">VERIFY EMAIL</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </form>
  );
  }
}

export default withStyles(styles)(EmailVerification);