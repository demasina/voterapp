import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
/*
const style = {
  grid: {
    margin: "0 -15px",
    width: "auto"
  }
};*/

const style = {
  grid: {
    margin: "0 1px",
    width: "auto"
  }
};

function GridContainer(props) {
  const { classes, children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
