import React from "react";
import { Table } from "reactstrap";
import axios from "axios";
class AppTableVar extends React.Component {
  render() {
    return (
      <div><h1>Variation</h1>
        < Table >
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
                  <td>{user.Jan.variation}</td>
                  <td>{user.Feb.variation}</td>
                  <td>{user.Mar.variation}</td>
                </tr>
              );
            })}
          </tbody>
        </Table ></div>

    );
  }
}
export default AppTableVar;
