import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

/*
var style = {
  grid: {
    paddingLeft: "6px",
	marginRight: "-6px",
	marginBottom: "-20px",
	marginLeft: "10px"
  }
};
*/

/*
var style = {
  grid: {
    padding: "0 15px"
  }
};
*/

var style = {
  grid: {
    padding: "0px",
	marginRight: "30px",
	marginBottom: "10px"
  }
};

function GridItem({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
