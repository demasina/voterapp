import React, { Component } from "react";
import { connect } from "react-redux";

class Answer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="answer-wrapper">
        <span className="answer-title" />
        <span className="votes-count" />
        <div className="vertical-line-wrapper">
          <div className="vertical-line" />
        </div>
      </div>
    );
  }
}

export default Answer;
