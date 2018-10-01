import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as pageActions from '../../actions'
import axios from 'axios';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import CancelIcon  from '@material-ui/icons/Cancel';
import ConfigTitleModal from 'components/Modal/CategoryTitleConfigModal.jsx';
import createHistory from "history/createBrowserHistory"

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
};

const history = createHistory()

class ConfigItem extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			item: this.props.item,
			table: this.props.table,
			isTittleSelected: false,
			browserHistory: this.props._history,
			change: null
		}
		
		this.handleSelectedTitle= this.handleSelectedTitle.bind(this);
		this.handleMoveUp = this.handleMoveUp.bind(this);
		this.handleMoveDown = this.handleMoveDown.bind(this);
	}
	
	
	handleSelectedTitle(){
			if(this.state.isTittleSelected !== true){
				this.setState({isTittleSelected: true});
				this.props.pageActions.changeTitle('initial', this.state.item);
			}
	}
	
	componentWillReceiveProps(nextProps) {		
				this.setState({change: nextProps.change});
				
				if(!!nextProps.currentCategory){
					if(nextProps.change != 'initial' && nextProps.currentCategory._id === this.state.item._id){					
							this.setState({isTittleSelected: false});
							
							this.props.changeTitleConfig(nextProps);
							
							this.props.pageActions.changeTitle('rechange', this.state.item);
						} 
				}
           } 
		   
	   
/* 		shouldComponentUpdate(nextProps, nextState){
			 console.log("SHOULD COMPONENT UPDATE");
			 console.log("PROPS", nextProps);
			 console.log("STATE", nextState);
			 
			 return true;
		 }   */
		   
 	handleMoveUp(){
		var itemIndexInTable = this.state.table.findIndex(elem => elem._id === this.state.item._id);
		this.props.moveCategoryUp(itemIndexInTable);
	} 
	
	handleMoveDown(){
		var itemIndexInTable = this.state.table.findIndex(elem => elem._id === this.state.item._id);
		this.props.moveCategoryDown(itemIndexInTable);
	} 
	
	getConfigTitleModal(){
		let modal;
		if(this.state.isTittleSelected == true){
			modal = <ConfigTitleModal open={true} title={this.state.item.title}/>;
		}else{
			modal = <ConfigTitleModal open={false}/>;
		}
		return modal;
	}
	
	render(){
		  let configTitleModal = this.getConfigTitleModal();
		  return (
			  <GridContainer >
				<GridItem xs={3} onClick={this.handleSelectedTitle}>
					<h5>{this.state.item.title}</h5>
						{configTitleModal}
				 </GridItem>
				  <GridItem >
						<Button color="info" onClick={this.handleMoveUp} type="button">
							<ArrowUpIcon />
						</Button>
				   </GridItem>
					 <GridItem >
						<Button color="info" onClick={this.handleMoveDown} type="button">
							<ArrowDownIcon />
						</Button>
				   </GridItem>
				   <GridItem >
						<Button color="warning">
							<CancelIcon />
						</Button>
				   </GridItem>
				   <GridItem >
						<Button color="info" >
							*
						</Button>
				   </GridItem>
			  </GridContainer>

		  );
  }
}

function mapStateToProps(state){
	const { change, currentCategory} = state;
	return{ 
		change,
		currentCategory
	}
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

const ConfigItemMapped = connect(mapStateToProps,mapDispatchToProps)(ConfigItem)

export default withStyles(styles)(ConfigItemMapped);