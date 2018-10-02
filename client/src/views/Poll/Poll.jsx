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
<<<<<<< HEAD

=======
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
<<<<<<< HEAD

=======
  
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
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
<<<<<<< HEAD
              <h4>das</h4>
=======
<<<<<<< HEAD
                <h4></h4>
                <ul>
=======
                <h4>{this.props.pollname}</h4>
                <ul>
                {this.props.poll.answers.map((item) => {
                  
                  return (<Answer allVotes={this.props.allVotes} key={item.id} answer={item.text} votes={item.votes} id={item.id}/>)
                })}
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
                </ul>
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
            </CardBody>
            <CardFooter />
          </Card>
        </GridItem>
      </div>
    );
  }
}

<<<<<<< HEAD
export default Poll;
=======
<<<<<<< HEAD

export default Poll;
=======
const mapStateToProps = state => {
  return {
    allVotes: state.answersReducer.allVotes
  }
}

export default connect (mapStateToProps) (Poll);
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
