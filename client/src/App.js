import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});
const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "태완이",
    birthday: 961222,
    gender: "남자",
    job: "퍼블리셔",
    lover: "solo",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "규형이",
    birthday: 901023,
    gender: "남자",
    job: "뒤틀린듀오의퍼블리셔",
    lover: "커플",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "츠키",
    birthday: 210,
    gender: "남자",
    job: "귀여움",
    lover: "고양이",
  },
];
class App extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
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
            {customers.map((custormer) => {
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
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);
