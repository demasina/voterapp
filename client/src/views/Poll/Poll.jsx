import React, { Component } from "react";
// react plugin for creating charts
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Answer from "./Answer";
import { connect } from "react-redux";

class Poll extends Component {
  // percent = props => {

  //   var res = props.answers.reduce(function(sum, current) {
  //     console.log(current)
  //     let piece = (sum/ current.votes) *100
  //     sum = piece
  //     console.log(sum)
  //   }, 1)
  //   // let piece = (small / big) * 100;
  //   // console.log(piece)
  //   // return piece;
  // }

  render() {
    return (
      <div>
        <GridItem>
          <Card chart>
            <CardHeader color="primary">
              <h3>This is poll result</h3>
              <p>Please, choose your answer if you have not yet</p>
            </CardHeader>
            <CardBody>
              <h4>das</h4>
            </CardBody>
            <CardFooter />
          </Card>
        </GridItem>
      </div>
    );
  }
}

export default Poll;
