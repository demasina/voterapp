import React, { Component } from "react"; 
import {connect} from 'react-redux';
import {addAnswer} from "../../actions/index"



class Answer extends Component {
    percentage = props => {
        if(props > 100) {
            return props/10
        } else {
            return props
        }
        
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="answer-wrapper" onClick={() => this.props.addAnswer( this.props.votes)}>
                <span className="answer-title">{this.props.answer}</span>
                <span className="votes-count">{this.props.votes}</span>
                <div className="vertical-line-wrapper">
                    <div className="vertical-line" style={{width: this.percentage(this.props.votes) + "%"}} >
                        
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addAnswer: ( count) => dispatch(addAnswer( count))
        }
    }

export default connect(null, mapDispatchToProps)(Answer);