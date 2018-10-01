import React from "react";
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
import CategorySelect from "components/Select/CategorySelect.jsx";// <ConfigItem />
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

function ConfigTable({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
	  <GridContainer spacing={10}>
		  <GridItem>
		  	<CategorySelect />
		  </GridItem>
		  <GridItem>
		  	<CustomInput
                    labelText="Description"
                    id="description"
                    formControlProps={{
                      fullWidth: true,
					  className: 'root'

                    }}
					inputProps = {{
						disabled: false,
						margin: 'none'
					}}
			/> 
		  </GridItem>
		  <GridItem >
		  		<CustomInput
                    labelText="Value"
                    id="value"
                    formControlProps={{
                      fullWidth: true
                    }}
					inputProps = {{
						value: "UAH"
					}}
				/> 
		  </GridItem>
		  <GridItem >
		  		<Button  color="primary" type="button" >ADD EXPENSES</Button>

		  </GridItem>
	  </GridContainer>
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