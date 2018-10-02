import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
<<<<<<< HEAD
import Quote from "components/Typography/Quote"
=======
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { connect } from "react-redux";
import Button from "components/CustomButtons/Button.jsx";
import { bugs, website, server } from "variables/general.jsx";
import Poll from "../Poll/Poll";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { Typography } from "@material-ui/core";
<<<<<<< HEAD
import api from '../../services/api';
=======
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2

class Dashboard extends React.Component {
<<<<<<< HEAD
  async componentDidMount() {
    const result = await api.call('post', 'auth/login', {
      username: 'anton',
      password: 'antoha'
    })

    console.log(result)
  }
  render() {
=======
  render() {
    const { classes } = this.props;
<<<<<<< HEAD

=======
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
    
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <Button color="primary" type="button">
              ADD NEW POLL
            </Button>
            <Card>
              <CardHeader className="dash-header">
                <h3>Polls</h3>
                <Button color="primary" type="button">
                  NOT VOTED POLLS
                </Button>
                <Button type="button">VOTED POLLS</Button>
              </CardHeader>
<<<<<<< HEAD
              <CardBody />
=======
              <CardBody>
<<<<<<< HEAD
                <Typography>
                  Polls
                </Typography>

=======
                
                  {this.props.polls.map((poll) => {
                    return <Poll key={poll.id} pollname={poll.name} id={poll.id} poll={poll}/>
                  })}
                
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
              </CardBody>
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

<<<<<<< HEAD
export default Dashboard;
=======
<<<<<<< HEAD

export default Dashboard;
=======
const mapStateToProps = state => {
  console.log(state)
  return {
    polls: state.answersReducer.polls
  }
}

export default connect(mapStateToProps)(Dashboard);
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
