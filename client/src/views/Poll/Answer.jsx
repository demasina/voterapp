<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
=======
<<<<<<< HEAD
import React, { Component } from "react"; 
import {connect} from 'react-redux';



class Answer extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className="answer-wrapper" >
                <span className="answer-title"></span>
                <span className="votes-count"></span>
                <div className="vertical-line-wrapper">
                    <div className="vertical-line"  >
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Answer;
=======
import React, { Component } from "react"; 
import {connect} from 'react-redux';
import {addAnswer} from "../../actions/index"


>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d

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

<<<<<<< HEAD
export default Answer;
=======
export default connect(null, mapDispatchToProps)(Answer);
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
