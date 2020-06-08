import React from "react";
import { Table } from "reactstrap";
import axios from "axios";
class AppTable extends React.Component {
  render() {
    return (<div>
      <h1>Hours</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rate</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.rate}</td>
                <td>{user.Jan.hours}</td>
                <td>{user.Feb.hours}</td>
                <td>{user.Mar.hours}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>

    );
  }
}
export default AppTable;
