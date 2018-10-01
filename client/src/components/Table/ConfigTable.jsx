import React, { Component } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle";

//new added
import ConfigItem from "components/Table/ConfigItem.jsx";// <ConfigItem />

function ConfigTable({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
 
 
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key}>
                    <TableCell className={classes.tableCell} key={key}>
						<ConfigItem _history={props._history} table={props.tableData} item={prop} moveCategoryUp={props.moveCategoryUp}
								moveCategoryDown={props.moveCategoryDown} changeTitleConfig={props.changeTitleConfig}/>
					</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

ConfigTable.defaultProps = {
  tableHeaderColor: "gray"
};

ConfigTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string)
  //tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(ConfigTable);
