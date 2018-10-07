/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "routes/dashboard.jsx";
import loginRoutes from "../../routes/login.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

const switchRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        {dashboardRoutes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;
          if (prop.path === "/poll") {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          }
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    );
  } else {
    return (
      <Switch>
        {loginRoutes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, isAuthenticated, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={isAuthenticated ? dashboardRoutes : loginRoutes}
          logoText="Voter"
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={isAuthenticated ? dashboardRoutes : loginRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {
}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>
                {switchRoutes(this.props.isAuthenticated)}
              </div>
            </div>
          ) : (
            <div className={classes.map}>
              {switchRoutes(this.props.isAuthenticated)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(withStyles(dashboardStyle)(App));