import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 2,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});
class App extends Component {
  state = {
    customers: "",
    completed: 0,
  };
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    console.log("실행");
    console.log(this.timer);
    this.callApi()
      .then((res) =>
        this.setState({
          customers: res,
        })
      )
      .catch((err) => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };
  progress = () => {
    const { completed } = this.state;
    this.setState({
      completed: completed >= 100 ? 0 : completed + 1,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress
                  className={classes.progress}
                  variant="determinate"
                  value={this.state.completed}
                />
              </TableCell>
            </TableRow>
            {this.state.customers
              ? this.state.customers.map((custormer) => {
                  return (
                    <Customer
                      key={custormer.id}
                      name={custormer.name}
                      birthday={custormer.birthday}
                      gender={custormer.gender}
                      job={custormer.job}
                      id={custormer.id}
                      image={custormer.image}
                      lover={custormer.lover}
                    />
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);
