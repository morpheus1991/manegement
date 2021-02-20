import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
class Customer extends React.Component {
  render() {
    console.log(this.props);
    const { id, name, image, gender, job, birthday, lover } = this.props;
    return (
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>
          <img src={image} alt="profile" />
        </TableCell>
        <TableCell>
          {name}/{lover}
        </TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{job}</TableCell>
      </TableRow>
    );
  }
}

export default Customer;
// export default CustomerProfile;
